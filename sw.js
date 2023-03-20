self.addEventListener("install", (event) => {
  console.log("[Service Woker] Installing the service worker...", event);
  event.waitUntil(
    caches.open("static").then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&family=Outfit:wght@400;700&display=swap",
        "/images/favicon-32x32.png",
        "/images/image-qr-code.png",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Woker] activating the service worker...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  //   console.log("[Service Woker] Fetching the service worker....", event);
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        return res;
      } else {
        return fetch(event.request).then((response) => {
          caches.open("dynamic").then((res) => {
            res.put(event.request.url, response);
            return response.clone();
          });
        });
      }
    })
  );
});
