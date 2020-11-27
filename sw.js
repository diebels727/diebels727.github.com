self.addEventListener('fetch', function(event) {
  console.log(`fetch event(${event}).`);
  console.log(event);
  response = new Response(`<html><head><script>alert('hello from js.');</script></head><body>foo</body></html>`, {headers: {'Content-Type': 'text/html', 'service-worker-allowed': '*', 'service-worker': true, 'foo': 'bar'}});
  console.log(`responding with response(${response})`);
  console.log(response);
  //event.respondWith(response);
});
