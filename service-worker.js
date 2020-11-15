// push notification
self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

// Menggunakan Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
    workbox.precaching.precacheAndRoute([
        { url: '/', revision: '1' },
        { url: '/nav.html', revision: '1' },
        { url: '/index.html', revision: '1' },
        { url: '/css/materialize.min.css', revision: '1' },
        { url: '/js/materialize.min.js', revision: '1' },
        { url: '/js/materialize.js', revision: '1' },
        { url: '/js/nav.js', revision: '1' },
        { url: '/js/api.js', revision: '1' },
        { url: '/js/idb.js', revision: '1' },
        { url: '/pages/home.html', revision: '1' },
        { url: '/pages/saved.html', revision: '1' },
        { url: '/pages/tentang.html', revision: '1' },
        { url: '/pages/tim.html', revision: '1' },
        { url: '/image/bundes-logo.png', revision: '1' },
        { url: '/image/football-badge.png', revision: '1' },
        { url: '/image/star.png', revision: '1' },
        { url: '/image/trophy.png', revision: '1' },
        { url: '/image/question.png', revision: '1' },
        { url: '/icon1.png', revision: '1' },
        { url: '/icon2.png', revision: '1' },
        { url: '/manifest.json', revision: '1' }
    ], {
        ignoreUrlParametersMatching: [/.*/]
    })

    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'bundesliga',
        })
    );

    workbox.routing.registerRoute(
        /.*(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'image',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.Plugin({
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                }),
            ]
        })
    );
}

else { console.log(`Workbox gagal dimuat`); }




