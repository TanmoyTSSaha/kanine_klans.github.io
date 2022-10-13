'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "60d91a985f147dff9a0a976084635035",
"main.dart.js": "c0d3e6aea86c9282db36f0ec2ae982ea",
"assets/NOTICES": "dab5d36e34a11c4c7bc2f67c4be94d0d",
"assets/assets/images/Neil.png": "55169df982a0c363c9b28ea819d98d03",
"assets/assets/images/streaming.png": "2e3c72bbfc53c770e203c2d86b1d040e",
"assets/assets/images/card.png": "b4a4ef11789a3a5cbaf66ebcf73bcc23",
"assets/assets/images/betting.png": "094441b9474043ec368b193405de572d",
"assets/assets/images/yazar.png": "e8267961cbd790b1aa60097d2e9d7045",
"assets/assets/images/race.png": "7742d07980764636416327b0c264d113",
"assets/assets/images/kk_breed.png": "2328f9d46968ad1f161f79c51769dbdf",
"assets/assets/images/Fox.png": "c21470d6e43f263d02164ceee38511d9",
"assets/assets/images/anshuman.png": "44e867807245ebdf636c6a2c8f8b6fde",
"assets/assets/images/breed.png": "d185c4e892670be665e9179ba45386ac",
"assets/assets/images/Jackal.png": "f3e2a48dd12698de0d5bd4baef544e5d",
"assets/assets/images/aman.png": "689f0c6c7936aee55f186b145b23794d",
"assets/assets/images/druv.png": "30eeba36be5a55105686f4278327472b",
"assets/assets/images/game-1.png": "8419c67b8b64815858159cf7ec04a115",
"assets/assets/images/nft.png": "aafa963741dbac181fda5940262526e7",
"assets/assets/images/players.png": "727a9dde2e9c4f4519442481913b6320",
"assets/assets/images/Dog.png": "de3695bc4f0d424b6c262d8b857bf26f",
"assets/assets/images/players_revenue.png": "62c5549526a3934b7eb917a238137f0c",
"assets/assets/images/Line.png": "2d8fa23cdfee1032d63c57a19d70854d",
"assets/assets/images/tournament.png": "9bf38cee5b7245e1523c70d2f440c3ac",
"assets/assets/images/dog4.png": "53c320d1e817ab22335c0e2355dc923b",
"assets/assets/images/game.png": "d038b1eb1f446a95073e3d5215882e4b",
"assets/assets/images/kevin.png": "ce836486a0e4727a3b0f5fa4b54c5dc4",
"assets/assets/images/person.png": "4a0348aa0e2b3fecf684f9c48547bc92",
"assets/assets/images/Wolf.png": "66aaa60e5c2295e1a34c05dcca037204",
"assets/assets/images/card-2.png": "0c6bac5986909690e49c4f103d6528d5",
"assets/assets/images/background_image.png": "2d1fe567b9e0db9e04284288953e66e9",
"assets/assets/images/Asset_5.png": "8a11e6d8c306b92ace25e3eb7ab2f8b0",
"assets/assets/icons/linkedin.svg": "1cbbcbd9728dce16935a9ceba2575fc2",
"assets/assets/icons/logo.svg": "776849ce4585ab9c322f490469869a43",
"assets/assets/icons/medium.svg": "b990c9f6d414ec6c4129172eda56dbe9",
"assets/assets/icons/twitter.svg": "a6d4e390f652687ebc4bc500f0387b54",
"assets/assets/icons/discord.svg": "2919795a2d4050cc6ac61addc0697427",
"assets/assets/icons/telegram.svg": "ae2c764f9c4761deafc0f5e91f83cd57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "b7ebd286c86d70ab1b21b841c581e79b",
"assets/shaders/ink_sparkle.frag": "10870ac84e2415604b0562593a7892d9",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "b5862d5e475edd0f2df60d8d3c8362c8",
"/": "b5862d5e475edd0f2df60d8d3c8362c8",
"version.json": "b610fa2240eb7a8ff9d5fb61d3ca10b3",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
