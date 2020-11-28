self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('www.example.com/js/app.js')) {
    console.log('handling event for js/app.js');
    response = new Response("navigator.serviceWorker.register('https://www.example.com/js/sw2.js', {scope: './'}).then((reg) => {console.log('success.');}).catch((error) => {console.log('failure');});alert('did register.');", 
    {headers: {'Content-Type': 'application/javascript', 'service-worker-allowed': '*', 'service-worker': true, 'type': 'js/app.js'}});
    console.log(response);
    console.log(response.body);
    event.respondWith(response);
    return;
  }
  if (event.request.url.includes('www.example.com/js/sw2.js')) {
    console.log('handling event for js/sw.js');
  }
});
