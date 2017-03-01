(function () {
  // Checking if browser supports Javascript
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  doc.classList.add('js');

  var bubblesCollection = document.querySelectorAll('.conversation__bubble--general');
  var i = 0;
  // bubblesCollection[0].classList.remove('hidden');

  function nextBubble () {
    changeBubble(bubblesCollection[i]);
    i = (i + 1) % bubblesCollection.length;
  };
  function changeBubble () {
    bubblesCollection[i].classList.remove('hidden');
  };
  window.setTimeout(window.setInterval(nextBubble, 3000), 1000);
}());
