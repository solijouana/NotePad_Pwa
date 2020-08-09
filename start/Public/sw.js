const STATIC_CACHE_NAME = 'pwanote-static';
const DYNAMIC_CACHE_NAME = 'pwanote-dynamic';
const GOOGLE_FONT_URL = 'https://fonts.gstatic.com';

var STATIC_ASSETS = [
    '/',
    '/index.html',
    '/add.html',
    '/offline.html',
    '/favicon.ico',
    '/assets/css/style.css',
    '/assets/js/libs/material.min.js',
    '/assets/js/libs/fetch.js',
    '/assets/js/libs/idb.min.js',
    '/assets/js/db.js',
    '/assets/js/serverApi.js',
    '/assets/js/libs/promise.js',
    '/assets/js/helpers.js',
    '/assets/js/main.js',
    '/assets/css/libs/material.min.css',
    '/manifest.json',
    'https://fonts.googleapis.com/css?family=Roboto:400,700',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', function (event) {
    console.log('[sw] installing' + event);

    event.waitUntil(
        caches.open(STATIC_CACHE_NAME).then((cache) => {
            console.log('[sw] precaching is run');
            return cache.addAll(STATIC_ASSETS);
        })
            .catch((e) => {
                console.log('[sw] caching error', e);
            })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    return self.clients.claim();
});


function isIncluded(string, array) {
    var path;
    if (string.indexOf(self.origin) === 0) {
        path = string.substring(self.origin.length);
    } else {
        path = string;
    }

    return array.indexOf(path) > -1;
}

var isGoogleUrl = function (request) {
    return request.url.indexOf(GOOGLE_FONT_URL) === 0;
}

var cacheFonts = function (request) {
    return fetch(request).then((newRes) => {
        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(request, newRes);
        });

        return newRes.clone();
    });
};

self.addEventListener('fetch', function (event) {
    var request = event.request;
    if (isIncluded(request.url, STATIC_ASSETS)) {
        event.respondWith(caches.match(request));
    }

    if (isGoogleUrl(request)) {
        event.respondWith(
            caches.match(request)
                .then((res) => {
                    return res || cacheFonts(request);
                })
        );
    }
});