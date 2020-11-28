self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('www.example.com/js/app.js')) {
    console.log('handling event for js/app.js');
    response = new Response('<script>alert("js/app.js");</script>', {headers: {'Content-Type': 'text/html', 'service-worker-allowed': '*', 'service-worker': true, 'type': 'js/app.js'}});
    console.log(response);
    event.respondWith(response);
  }
  if (event.request.url.includes('www.example.com/js/sw.js')) {
    console.log('handling event for js/sw.js');
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
