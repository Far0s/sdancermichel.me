(function () {
  // Checking if browser supports Javascript
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  doc.classList.add('js');

  var bubblesCollection = document.querySelectorAll('.conversation__bubble--general, .conversation .reaction__button');
  var reactionsCollection = document.querySelector('.reactions');
  var loaderBubble = document.querySelector('.conversation__bubble--loader');

  // For debugging
  // for (var i = 0; i < bubblesCollection.length; i++) {
  //   bubblesCollection[i].classList.remove('hidden');
  // };
  reactionsCollection.classList.remove('hidden');

  var i = 0;
  function nextBubble () {
    changeBubble(bubblesCollection[i]);
    i = (i + 1) % bubblesCollection.length;
  };
  function changeBubble () {
    bubblesCollection[i].classList.remove('hidden');
    console.log(i);
    if (i === 4) {
      console.log('oh');
      clearInterval(displayBubbles);
      loaderBubble.classList.add('hidden');
    }
  };
  var displayBubbles = window.setInterval(nextBubble, 2000);
  window.setTimeout(displayBubbles, 1000);
}());
