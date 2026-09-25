/* Music Rainbow Service Worker - Build 2.099 */
const BUILD = "2.099";
const PRECACHE = `music-rainbow-precache-${BUILD}`;
const RUNTIME = `music-rainbow-runtime-${BUILD}`;

// Salamander Grand Piano — Yamaha C5 (CC BY 3.0, Alexander Holm).
// Gli URL sono gli stessi usati dalla demo Tone.js approvata.
const PIANO_REMOTE_URLS = [
  "https://tonejs.github.io/audio/salamander/C3.mp3",
  "https://tonejs.github.io/audio/salamander/Ds3.mp3",
  "https://tonejs.github.io/audio/salamander/Fs3.mp3",
  "https://tonejs.github.io/audio/salamander/A3.mp3",
  "https://tonejs.github.io/audio/salamander/C4.mp3",
  "https://tonejs.github.io/audio/salamander/Ds4.mp3",
  "https://tonejs.github.io/audio/salamander/Fs4.mp3",
  "https://tonejs.github.io/audio/salamander/A4.mp3",
  "https://tonejs.github.io/audio/salamander/C5.mp3",
  "https://tonejs.github.io/audio/salamander/Ds5.mp3",
  "https://tonejs.github.io/audio/salamander/Fs5.mp3",
  "https://tonejs.github.io/audio/salamander/A5.mp3",
  "https://tonejs.github.io/audio/salamander/C6.mp3"
];

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./Assets/Home-rainbow-main.png",
  "./Assets/grand-staff-l6.png",
  "./Assets/staff-base-bass.png",
  "./Assets/staff-base-treble.png",
  "./Assets/MusicRainbow-SMuFL.woff2",
  "./Scores/library.json",
  "./Scores/piccolo-arcobaleno.mrscore",
  "./Scores/passi-di-sole.mrscore",
  "./Scores/stelle-in-punta-di-piedi.mrscore",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

// Install: precache + activate subito
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    // Gli asset locali restano obbligatori: se uno manca, l'installazione non deve mascherarlo.
    const precache = await caches.open(PRECACHE);
    await precache.addAll(PRECACHE_URLS);

    // Il banco piano remoto viene scaldato in cache senza rendere fragile l'update PWA:
    // un eventuale problema temporaneo del CDN non blocca l'attivazione della nuova build.
    const runtime = await caches.open(RUNTIME);
    await Promise.allSettled(PIANO_REMOTE_URLS.map(async url => {
      const req = new Request(url, { mode: "cors", cache: "no-cache" });
      const res = await fetch(req);
      if (res && res.ok) await runtime.put(req, res.clone());
    }));

    await self.skipWaiting();
  })());
});

// Activate: cleanup + claim
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k.startsWith("music-rainbow-") && k !== PRECACHE && k !== RUNTIME)
        .map(k => caches.delete(k))
    );
    await self.clients.claim();

    // Build 2.099 — refresh affidabile anche se la pagina ancora aperta appartiene
    // a una build precedente con un vecchio guard di sessionStorage. L'activate
    // avviene una sola volta per questo worker, quindi la navigazione non crea loop.
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.allSettled(windows.map(async client => {
      try {
        const url = new URL(client.url);
        if (url.origin !== self.location.origin) return;
        url.searchParams.set("v", BUILD);
        await client.navigate(url.href);
      } catch (e) {}
    }));
  })());
});

// Supporta richiesta client per saltare l'attesa
self.addEventListener("message", event => {
  const data = event.data || {};
  if (data && data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

async function cacheFirst(request) {
  // Prima match esatto; poi ignora la query di versione per usare anche gli asset precache offline.
  const cached = await caches.match(request) || await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;

  const res = await fetch(request);
  if (res && res.ok) {
    const cache = await caches.open(RUNTIME);
    cache.put(request, res.clone());
  }
  return res;
}

async function networkFirst(request) {
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      const cache = await caches.open(PRECACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch (e) {
    // Prova cache match (ignora query per navigazioni)
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;

    // Fallback SPA: index.html
    const indexCached = await caches.match("./index.html");
    if (indexCached) return indexCached;

    throw e;
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

  // Navigazioni/documenti: network-first (aggiornamenti affidabili)
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(networkFirst(req));
    return;
  }

  // Google Fonts: stale-while-revalidate
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Banco Salamander: cache-first anche cross-origin, così dopo il primo caricamento
  // i campioni restano disponibili nella PWA installata anche senza rete.
  if (url.hostname === "tonejs.github.io" && url.pathname.startsWith("/audio/salamander/")) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // Stessa origin: cache-first per asset
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // Altri cross-origin: passa-through
  event.respondWith(fetch(req).catch(() => caches.match(req)));
});
