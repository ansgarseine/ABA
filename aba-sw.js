const CACHE = "aba-cache-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./ABA_iOS_Final.html",
  "./style.css",
  "./main.js",
  "./bilder/aba-icon-192.png",
  "./bilder/aba-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
