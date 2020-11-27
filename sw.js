self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('www.example.com/js/app.js')) {
    console.log('handling event for js/app.js');
    response = new Response(`
<html>
<head>
<script>
navigator.serviceWorker.register('sw.js', {scope: './'})
.then((reg) => {
  console.log(`registration success scope(${reg.scope}).`);
}).catch((error) => {
  console.log(`registration error(${error})`);
  });
</script>
</head>
<body>
foo
</body>
</html>
`, {headers: {'Content-Type': 'text/html', 'service-worker-allowed': '*', 'service-worker': true, 'foo': 'bar'}});
    console.log(response);
    event.respondWith(response);
  }
  if (event.request.url.includes('www.example.com/js/sw.js')) {
    consol.elog('handling event for js/sw.js');
  }
/*
  console.log(`fetch event(${event}).`);
  console.log(event);
  response = new Response(`<html><head><script>alert('hello from js.');</script></head><body>foo</body></html>`, {headers: {'Content-Type': 'text/html', 'service-worker-allowed': '*', 'service-worker': true, 'foo': 'bar'}});
  console.log(`responding with response(${response})`);
  console.log(response);
  event.respondWith(response);
*/
});
