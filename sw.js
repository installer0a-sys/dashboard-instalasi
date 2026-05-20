self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Mengambil data secara langsung (Online First) agar input data ke Spreadsheet selalu real-time
  e.respondWith(fetch(e.request));
});