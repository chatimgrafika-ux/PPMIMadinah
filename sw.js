// Service Worker Dasar untuk mematuhi keamanan PWA Android terbaru
const CACHE_NAME = 'PPMI-Madinah-v1';

self.addEventListener('install', (event) => {
    // Memaksa service worker segera aktif
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Membiarkan fetch berjalan normal, ini sudah cukup untuk bypass syarat PWA Chrome
    event.respondWith(fetch(event.request).catch(() => {
        return new Response("Aplikasi sedang offline.");
    }));
});
