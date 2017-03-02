(function () {
  // Checking if browser supports Javascript
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  doc.classList.add('js');

  var bubblesCollection = document.querySelectorAll('.conversation__bubble--general');
  var reactionsCollection = document.querySelector('.reactions');

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
  };
  var displayBubbles = window.setInterval(nextBubble, 2000);
  window.setTimeout(displayBubbles, 1000);
}());
