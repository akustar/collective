const cacheName = 'webtech-v1'
const appShellFiles = [
  '/index.html',
  '/webtech.js',
  '/styles.css',
  '/fonts/whitney-bold.woff',
  '/fonts/whitney-book.woff',
  '/fonts/whitney-medium.woff',
  '/fonts/whitney-semibold.woff',
  '/icons/icon-48.png',
  '/icons/icon-96.png',
  '/icons/icon-144.png',
  '/icons/icon-192.png',
]

function init () {
  initEvents()
}

function initEvents () {
  self.addEventListener('install', onInstall)
  self.addEventListener('fetch', onFetch)
}

function onInstall (event) {
  console.log('[Service Worker] Install')
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[Service Worker] Caching all: app shell and content')
      return cache.addAll(appShellFiles)
    })
  )
}

function onFetch (event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log(`[Service Worker] Fetching resource: ${event.request.url}`)
      if (response) return response

      return fetch(event.request)
    })
  )
}

init()