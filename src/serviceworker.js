var cacheName = "sw-v4";
var filesToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "https://jsonplaceholder.typicode.com/users",
];
self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install v4");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      var cache = await caches.open(cacheName);
      var cachedFiles = await cache.match(event.request);
      if (cachedFiles) {
        return cachedFiles;
      } else {
        try {
          var response = await fetch(event.request);
          await cache.put(event.request, response.clone());
          return response;
        } catch (e) {
          throw new Error(e);
        }
      }
    })()
  );
});
