self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('www.example.com/js/app.js')) {
    console.log('handling event for js/app.js');
    response = new Response(`
navigator.serviceWorker.register('sw.js', {scope: './'})
.then((reg) => {
  console.log(`registration success scope(${reg.scope}).`);
}).catch((error) => {
  console.log(`registration error(${error})`);
});
alert('did register.');
`, {headers: {'Content-Type': 'application/javascript', 'service-worker-allowed': '*', 'service-worker': true, 'type': 'js/app.js'}});
    console.log(response);
    console.log(response.body);
    event.respondWith(response);
    return;
  }
  if (event.request.url.includes('www.example.com/js/sw.js')) {
    console.log('handling event for js/sw.js');
  }
});
