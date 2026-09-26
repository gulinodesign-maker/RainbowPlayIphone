/* Music Rainbow Service Worker - Build 2.144 */
const BUILD = "2.144";
const PRECACHE = `music-rainbow-precache-${BUILD}`;
const RUNTIME = `music-rainbow-runtime-${BUILD}`;

// Solo risorse locali essenziali durante l'installazione: il banco piano remoto
// non deve più ritardare l'attivazione di una nuova build.
const CORE_PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./Assets/Home-rainbow-main.png",
  "./Assets/grand-staff-l6.png",
  "./Assets/staff-base-bass.png",
  "./Assets/staff-base-treble.png",
  "./Assets/MusicRainbow-SMuFL.woff2",
  "./Assets/tempo-drum-red-white.jpeg",
  "./Scores/library.json",
  "./Scores/piccolo-arcobaleno.mrscore",
  "./Scores/passi-di-sole.mrscore",
  "./Scores/stelle-in-punta-di-piedi.mrscore"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const precache = await caches.open(PRECACHE);
    await Promise.all(CORE_PRECACHE_URLS.map(async url => {
      const req = new Request(url, { cache: "reload" });
      const res = await fetch(req);
      if (!res || !res.ok) throw new Error(`Precache failed: ${url}`);
      await precache.put(req, res.clone());
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

    // Porta subito le finestre aperte sul documento fresco della nuova build.
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.allSettled(windows.map(async client => {
      try {
        const url = new URL(client.url);
        if (url.origin !== self.location.origin) return;
        url.searchParams.set("v", BUILD);
        url.searchParams.set("swrefresh", String(Date.now()));
        await client.navigate(url.href);
      } catch (e) {}
    }));
  })());
});

self.addEventListener("message", event => {
  const data = event.data || {};
  if (data && data.type === "SKIP_WAITING") self.skipWaiting();
});

async function cacheFirst(request) {
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
    const res = await fetch(request, { cache: "no-store" });
    if (res && res.ok) {
      const cache = await caches.open(PRECACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch (e) {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const indexCached = await caches.match("./index.html", { ignoreSearch: true });
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

  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(networkFirst(req));
    return;
  }

  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Il banco Salamander viene memorizzato solo quando serve davvero; nessun download
  // remoto può più bloccare l'installazione/attivazione di una nuova versione.
  if (url.hostname === "tonejs.github.io" && url.pathname.startsWith("/audio/salamander/")) {
    event.respondWith(cacheFirst(req));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(req));
    return;
  }

  event.respondWith(fetch(req).catch(() => caches.match(req)));
});
