
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('jstudio-cache-v1').then(function(cache) {
      return cache.addAll([
        './index_J_Studio_metadata_with_art_pwa.html',
        './manifest.webmanifest',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
