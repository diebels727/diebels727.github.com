if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: './'})
  .then((reg) => {
    console.log(`registration success scope(${reg.scope}).`);
  }).catch((error) => {
    console.log(`registration error(${error})`);
  });
}
