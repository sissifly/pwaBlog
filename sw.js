// 定义需要缓存的文件
var cacheFiles = [
    '/index.html',
    '/index.js'
];

// 监听 service worker 的 install 事件
this.addEventListener('install', function (event) {
    // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
    event.waitUntil(
        // caches是一个 CacheStorage 对象，使用open()方法打开一个缓存，缓存通过名称进行区分。
        caches.open('my-test-cache-v1').then(function (cache) {
            // 通过 cache 缓存对象的 addAll() 方法缓存文件。
            return cache.addAll(cacheFiles);
        })
    );
});