'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "60d91a985f147dff9a0a976084635035",
"main.dart.js": "78a01bdd992da242c479eaadcf538c95",
"assets/NOTICES": "dab5d36e34a11c4c7bc2f67c4be94d0d",
"assets/assets/images/durgesh.png": "ddf83f285f12c7fd382a4e7104515482",
"assets/assets/images/shauriya.png": "b2b7ac283b48827383b97c2e039bc795",
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
"assets/assets/images/tanmoy.png": "e9e82f01b6e5d15260ee65a179d64421",
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
"assets/assets/icons/Linkedin.svg": "493b8b2fd26bea2eaac4e76fdb8dd140",
"assets/assets/icons/twitter.svg": "a6d4e390f652687ebc4bc500f0387b54",
"assets/assets/icons/discord.svg": "2919795a2d4050cc6ac61addc0697427",
"assets/assets/icons/Twitter.svg": "4bf7452ae7f640d3a2c9a49d6ae1f2dd",
"assets/assets/icons/telegram.svg": "ae2c764f9c4761deafc0f5e91f83cd57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "895256fde210f960aa7598f85109e82d",
"assets/shaders/ink_sparkle.frag": "10870ac84e2415604b0562593a7892d9",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
".git/config": "7a7c61b9c8244f9a6e8fe1e4b3339e84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "39b5837374dfb126cbfcac6098929835",
".git/index": "1a60bd29a81d7ead3aa721101fc42e1b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/objects/bb/3812a091058de59ce6fc6a40ac208b3d7c4d7a": "2c9e6e4c4d7965700cad4483204684ad",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/a4/9e27b295d99eb910b264499c57d78022a960ab": "50f8646c96098a675c6a269bd7cb91e7",
".git/objects/a4/3653602952c01b992fa0537d79b9d8b065b823": "3d5865f4d7f8e78875282832485d9bcb",
".git/objects/5a/ed853bdcbac525965b5dd3bea70f755eaacd18": "4b62105fb9cf809b2c4f3abf31b483f6",
".git/objects/02/3bf3caf4342a229f0b5a7f5e610129dbf512b6": "05dc426e3e792ab0eab16d9d3d4cef77",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/eeb0fb2c7447b5d5f7f68cfddbc35c03439555": "4205bbba199780184028fe9f1ac14c9f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/53/56a783254f9ec987e979073b386afa80c3659d": "34497ca8641a571555a0d4713eb9942b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/ab/e35a2372c131581bdde03d0e915feddaf847e6": "46aa4aaa9d95a8460d26180a6e90c8c2",
".git/objects/00/f5f93171da296b2dc2158172bb0b5ff17f6966": "d358bc8984c1dfe272e83f540a58670a",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/72/5b94da326d2b7c7cfd846f8991562047e6d8b9": "5aec1eb2f0edcb0fc26d5b1f4ac2557e",
".git/objects/72/5eb60b98c35b38d4afa17ea90379810945a111": "0699ff18386543bc2c648e98e00fad03",
".git/objects/c5/69fab909e67486bc2d3d97b3d2bdacb9e4c773": "45d7806d1bd2641036b59b5e1361454c",
".git/objects/1e/baf2a8ec91685aecf0ea898a9a4acc8ad40eaa": "996bb330c9d835878e82de0eb70dcd51",
".git/objects/1c/743f001282e725c3a82a76a82659e47f368213": "604610c50454c0c9e7c9c69f3a0a4091",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/49/19d86b4e4782b9f5f8d4c79752d59ea6f989f9": "d973236060a2c64989dcc075c6135e62",
".git/objects/d8/fc0fd88c6226bc160c4b6e91b697ad56a75a93": "7ad5412466bc0af16a6dbaf5d56d3e4f",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/40/05246d0b7eabb9b0e119a1f81dcbe910e09554": "74f4dde9538040aacf99f242b674819a",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/ee/c85eea421feb3d9c185c0d4cc208e445996319": "60d220a4d5109811d9ace8e15f6f5342",
".git/objects/41/1fd56d4ef09f42c2d9625b39b645c928902720": "ef1593148b571423063cc00d895ed56f",
".git/objects/6f/683d23e5700557aa4b052f17cce9cd2c58a5fc": "600e2ee56c24c5d8a1a1f302f7cbf3e0",
".git/objects/30/466cea95dc2cf85c2fb4ae387106f1a696adec": "e27f570208f1b825e098dcc27aa37095",
".git/objects/0e/f1c02a74b52c48c0c1136da380a9e0daa1055f": "219c49192a69074a7135b376ce270901",
".git/objects/0e/2d5cc80bd489ddbb7849503533dd0b0dc3960d": "4e1345e5f9aae5a7fcda22d4c705054c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d5/5ccdd9b8b4e2694ffe73c049bbeac6ce0f05f1": "1a7ff7806c30c8d93ab2526c3970033f",
".git/objects/d5/2d54c27297bca926befd5a5642869f1b9a67a6": "700b59d782d241bb23a3d060ff6f2646",
".git/objects/31/d594e72f56f13fb0b8d53771615d0a92a054bf": "64c94d88d5bfd56a30264ee707fbcd30",
".git/objects/08/e68ce039db4269455f509cecf7c921e6de3c1f": "a0944d8a20f80a114ebc9c15a3c91198",
".git/objects/c0/352f0867612d7e3e23f0bad0807d1d44fbbbfb": "5cfe0559aa9105f4239573dff5ac41d1",
".git/objects/12/1939a5ce6bf50573162bc9b0d77ec115bbacf7": "1103832910845d456c74aca19347c9d9",
".git/objects/88/ab78cac9f64b752a78d8536fdfaa903cc08e1c": "237c525eec10d88135bb85e4e5decf5a",
".git/objects/88/f7565fd440357f4550d9c2f16130fce0230809": "32ca20bb39dd4cedb9f292eecaa62340",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/dc/1cd570ee79afb143980a8f6d6e41a9c9db02e4": "9af27d0831d252abd86a52103d22000a",
".git/objects/6e/612697a4c01c36de19841c0e62f94d4be862c6": "ee46780330369a2a3ac973148399cec9",
".git/objects/4a/8317c8d6f74a93f381705701da13d484643a76": "3c05a7b3f08426b5a2397a29d677b06f",
".git/objects/b0/81c6e0bf0c47bfb98bf923de0a4e455680b954": "6bd89b2c23e5a63596db0eebc1c6166d",
".git/objects/2c/f02667b8b34c173b7ca8a4ff3b1bc366a3d07e": "28b25d62e4ce99c0fe0351de628eaa13",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/60/6470bd947fb6faab891ebc3638dc864c61be09": "a479792590c05ee9815b7c30a3ccd3c5",
".git/objects/60/39bcefcd50c59670e6867e41a795bb78ce387b": "b09c1ec4fd29c3a830c870a02152168e",
".git/objects/d3/11249840c1caa59397559c3befa993f6b43acc": "eb2e001f4b94707792021df65b9c0b0c",
".git/objects/d3/fa4164ef0d13368d4cd617ee34fd9cabd0ba02": "fca97623f38aa5b07d87f53464697240",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/aa/9aa95a850456441f60ec474021276482efa8b6": "e574fc01ab1d903682ceffd6e78e9eec",
".git/objects/b8/10c0f5e026596cdc8dc1260c1e9aae225cca87": "95a85efd3e69e9cc6494d8ab49f55001",
".git/objects/b8/042dd308e043107c1ac7c9c73bf88b03e8920f": "6abaec062aaae8c26aefc7d53e69f755",
".git/objects/ec/d0f81de5c7d04d68c8efb513585f58072d9914": "6fbd175cce2b0c1f3297c785782c0309",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8b/16091bcd36bdfffc4b4de8de7b2bf756a19922": "f1eb76fe70a23529154795d9acaa92e4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/e7/cad9e206232f8dddd1bd3d9347a5eca98036b9": "c67bd2d3b6aae3c97fd94e2e7ca2e735",
".git/objects/9f/8377272758009d2a08d65a2aba9b9705900c86": "a34f0d713494446418ca02f5f740b863",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/51/dc76aedb3b0c25686d4994844634f7c3bd575a": "bf8a865b5c05558b5433099b8470f122",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/147d0c3024c9854d0cadf0fd43896fbf104880": "bf612481a46384ec50b555acd3d44666",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/05/50407e25859133c52089fc381026c07827f067": "b113383b36540bb1a3d8fa8a24b14b25",
".git/objects/b2/4377733da0eb79b247a0029463d802dbb8e03a": "fd79d32fb82dd579e3ea94be3a4f41aa",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/ed/8f7ab0b8cd6ff912efcea723b71520eea21d36": "b39ab8e6ec186ba69190f5cd28410141",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/933b380af19e83549ea4dff204eecdb89f833e": "1c8b82d36ea7e6e68169677aa36ed1f8",
".git/objects/e0/ab708049c9a01e71a6b70f512878923d02949f": "91744740a084517d2885a9f9c4f312f1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/3d/08d680d3d2f414ae1f8702f9e7c3777205f89f": "e1dd2257bac905751c70251eef0a3580",
".git/objects/d7/11d43ba0ee71aa090bf7c39c27d96518884089": "6babf9ca94cc929e292d5fe1cf4d7553",
".git/refs/heads/main": "8ced2871a59edf67bfd7b0cc6f0eb6fb",
".git/refs/remotes/origin/main": "8ced2871a59edf67bfd7b0cc6f0eb6fb",
".git/logs/HEAD": "64d3b300a4b09819068a881576fb94bc",
".git/logs/refs/heads/main": "262359e89bcb900e0cd34ae47720bc57",
".git/logs/refs/remotes/origin/main": "4ef2d3d842c1553bc2ce5379fbc1a2fc",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "956d1851c3c73b0830ab02748eb2e7c1",
"/": "956d1851c3c73b0830ab02748eb2e7c1",
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
