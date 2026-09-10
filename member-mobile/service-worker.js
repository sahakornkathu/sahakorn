const CACHE = 'kathu-member-mobile-launch-v2';
const BASE = '/sahakorn/member-mobile/';
const HOME = BASE + 'index.html';

const LOCAL = [
  HOME,
  BASE + 'member.html',
  BASE + 'beneficiary.html',
  BASE + 'memberexit.html',
  BASE + 'welfare.html',
  BASE + 'adminshare.html',
  BASE + 'dashboard.html',
  BASE + 'mobile.css',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png',
  BASE + 'icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(LOCAL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('esm.sh') ||
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('cdn.tailwindcss.com')
  ) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          caches.open(CACHE).then(cache => cache.put(request, response.clone()));
        }
        return response;
      } catch (err) {
        return (await caches.match(request)) ||
               (await caches.match(HOME)) ||
               Response.error();
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then(async cached => {
        if (cached) return cached;
        const response = await fetch(request);
        if (response && response.ok) {
          caches.open(CACHE).then(cache => cache.put(request, response.clone()));
        }
        return response;
      })
    );
  }
});
