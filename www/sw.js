/* MedTranslator — © 2026 Massimiliano Previtali. Tutti i diritti riservati.
   Versione web: funziona anche senza internet. La pagina principale si chiede prima alla rete (così gli aggiornamenti arrivano), il resto prima dalla memoria. */
var CACHE = 'medtranslator-web-1';
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (n) { return n !== CACHE; }).map(function (n) { return caches.delete(n); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  var pagina = r.mode === 'navigate';
  e.respondWith(pagina
    ? fetch(r).then(function (x) { var c = x.clone(); caches.open(CACHE).then(function (ca) { ca.put(r, c); }); return x; }).catch(function () { return caches.match(r).then(function (m) { return m || caches.match('./'); }); })
    : caches.match(r).then(function (m) { return m || fetch(r).then(function (x) { if (x.ok) { var c = x.clone(); caches.open(CACHE).then(function (ca) { ca.put(r, c); }); } return x; }); }));
});
