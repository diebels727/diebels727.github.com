self.addEventListener('fetch', function(event) {
  console.log(`fetch event(${event}).`);
  response = new Response(`<script>alert('hello from js.');</script>`, {headers: {'Content-Type': 'application/js', 'service-worker-allowed': '/sw/', 'foo': 'bar'}});
  console.log(`responding with response(${response}).`);
  event.respondWith(response);
});
