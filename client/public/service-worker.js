const CACHE_NAME = "my-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si se encuentra en caché, devolver la respuesta almacenada
      if (response) {
        return response;
      }
      // De lo contrario, recuperar de la red
      return fetch(event.request);
    })
  );
});