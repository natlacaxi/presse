// Service worker minimal, nécessaire pour que le navigateur propose
// une vraie installation de l'application (critère PWA), pas juste un raccourci.
// Il ne met rien en cache pour l'instant : toutes les requêtes passent normalement au réseau.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Laisse passer toutes les requêtes normalement (pas de cache pour l'instant).
  event.respondWith(fetch(event.request));
});
