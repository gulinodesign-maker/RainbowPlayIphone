/* Music Rainbow Service Worker - Build 2.470; bypass large GLB; safe cache errors */
const BUILD = "2.484";
// WebApp aggiornata con il pannello StoreKit nativo, senza modifiche ai dati locali.
const CACHE_REVISION = "settings-reference-484";
const PRECACHE = `music-rainbow-precache-${BUILD}-${CACHE_REVISION}`;
const RUNTIME = `music-rainbow-runtime-${BUILD}-${CACHE_REVISION}`;

const CORE_PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./Assets/Home-rainbow-main.png",
  "./Assets/pizza-durates-450.png",
  "./Assets/mimo-face-toggle-445.png",
  "./Assets/mimo-bubbles-447.css",
  "./Assets/mimo-bubbles-447.js",
  "./Assets/mimo-room-i18n-482.js",
  "./Assets/home-icon-level.svg",
  "./Assets/home-icon-scores-2179.svg",
  "./Assets/home-icon-play.svg",
  "./Assets/home-icon-learn.svg",
  "./Assets/home-icon-mimo-room.svg",
  "./Assets/home-icon-settings.svg",
  "./Assets/grand-staff-l6.png",
  "./Assets/grand-staff-l6-lower-clean.png",
  "./Assets/score-lower-treble-patch.png",
  "./Assets/staff-base-bass.png",
  "./Assets/staff-base-treble.png",
  "./Assets/MusicRainbow-SMuFL.woff2",
  "./Assets/mimo-rigged-369.js",
  "./Assets/mimo-haptics-414.js",
  "./Assets/room/solar-cycle-396.js",
  "./Assets/room/mimo-wash-rules-460.js",
  "./Assets/room/room-fixedbath-ipad-day.png",
  "./Assets/room/room-fixedbath-ipad-night.png",
  "./Assets/room/room-fixedbath-phone-day.png",
  "./Assets/room/room-fixedbath-phone-night.png",
  "./Assets/room/basket-back-day.png",
  "./Assets/room/basket-back-night.png",
  "./Assets/room/basket-ghost-day.png",
  "./Assets/room/basket-ghost-night.png",
  "./Assets/room/basket-front-day.png",
  "./Assets/room/basket-front-night.png",
  "./Assets/room/play-token-pretty.png",
  "./Assets/room/fruit-apple.png",
  "./Assets/room/fruit-banana.png",
  "./Assets/room/fruit-strawberry.png",
  "./Assets/room/fruit-grapes.png",
  "./Assets/room/fruit-pear.png",
  "./Assets/room/fruit-orange.png",
  "./Assets/room/fruit-peach.png",
  "./Assets/room/fruit-cherries.png",
  "./Assets/room/basket-sticker-apple.png",
  "./Assets/room/basket-sticker-banana.png",
  "./Assets/room/basket-sticker-strawberry.png",
  "./Assets/room/basket-sticker-grapes.png",
  "./Assets/room/basket-sticker-pear.png",
  "./Assets/room/basket-sticker-orange.png",
  "./Assets/room/basket-sticker-peach.png",
  "./Assets/room/basket-sticker-cherries.png",
  "./Scores/library.json"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const precache = await caches.open(PRECACHE);
    // I file di grandi dimensioni vengono richiesti direttamente dal renderer:
    // un singolo errore GitHub/CDN non deve invalidare l'intero aggiornamento.
    await Promise.allSettled(CORE_PRECACHE_URLS.map(async url => {
      const req = new Request(url, { cache: "reload" });
      const res = await fetch(req);
      if (!res || !res.ok) throw new Error(`Precache failed: ${url}`);
      try { await precache.put(req, res.clone()); }
      catch (e) { console.warn('[MR precache]', url, e); }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k.startsWith("music-rainbow-") && k !== PRECACHE && k !== RUNTIME)
        .map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  const data = event.data || {};
  if (data && data.type === "SKIP_WAITING") self.skipWaiting();
});

async function cacheFirst(request) {
  try {
    const cached = await caches.match(request) || await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
  } catch (e) { console.warn('[MR cache read]', e); }
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      // Non aspettare che il salvataggio abbia successo prima di restituire la risposta.
      try {
        const cache = await caches.open(RUNTIME);
        await cache.put(request, res.clone());
      } catch (e) { console.warn('[MR cache write]', e); }
    }
    return res;
  } catch (e) {
    return new Response('Risorsa non disponibile; verifica la connessione o la pubblicazione su GitHub.',
      { status: 503, statusText: 'Resource unavailable' });
  }
}

async function networkFirst(request) {
  try {
    const res = await fetch(request, { cache: "no-store" });
    if (res && res.ok) {
      try {
        const cache = await caches.open(PRECACHE);
        await cache.put(request, res.clone());
      } catch (e) { console.warn('[MR navigation cache]', e); }
    }
    return res;
  } catch (e) {
    try {
      const cached = await caches.match(request, { ignoreSearch: true });
      if (cached) return cached;
      const indexCached = await caches.match("./index.html", { ignoreSearch: true });
      if (indexCached) return indexCached;
    } catch (cacheError) { console.warn('[MR offline cache]', cacheError); }
    return new Response('Music Rainbow non disponibile: connessione o cache mancanti.',
      { status: 503, statusText: 'Offline' });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(res => {
    if (res && res.ok) cache.put(request, res.clone());
    return res;
  }).catch(() => null);
  return cached || (await fetchPromise) || new Response("", { status: 504, statusText: "Offline" });
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // iOS/WebKit può fallire salvando un GLB da 25 MB nel Cache API.
  // Lasciamo le richieste GLB fuori dal service worker, anche nelle web app installate.
  if (url.pathname.toLowerCase().endsWith('.glb')) return;
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(networkFirst(req));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }
  if (url.hostname === "tonejs.github.io" && url.pathname.startsWith("/audio/salamander/")) {
    event.respondWith(cacheFirst(req));
    return;
  }
  if (url.origin === self.location.origin) {
    // A cached old JS with ignoreSearch=true would otherwise override the new UI.
    if (url.pathname.toLowerCase().endsWith('.js')) {
      event.respondWith(networkFirst(req));
    } else {
      event.respondWith(cacheFirst(req));
    }
    return;
  }
  event.respondWith((async () => {
    try { return await fetch(req); }
    catch (e) {
      try { const cached = await caches.match(req); if (cached) return cached; } catch (_) {}
      return new Response('Rete non disponibile', { status: 503, statusText: 'Offline' });
    }
  })());
});
