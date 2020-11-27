self.addEventListener('fetch', function(event) {
  console.log(`fetch event(${event}).`);
  console.log(event);
  response = new Response(`alert('hello from js.');`, {headers: {'Content-Type': 'application/javascript', 'service-worker-allowed': '*', 'foo': 'bar'}});
  console.log(`responding with response(${response})`);
  event.respondWith(response);
});
