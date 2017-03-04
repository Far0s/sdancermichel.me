(function () {
  // Checking if browser supports Javascript
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  doc.classList.add('js');

  // Instancing a few selectors
  var bubblesCollection = document.querySelectorAll('.conversation__bubble--general, .conversation .reaction__button');
  var reactionsCollection = document.querySelector('.reactions');
  var loaderBubble = document.querySelector('.conversation__bubble--loader');

  // On document load, initiate the loading bubble and the general messaging tree
  loaderBubble.classList.remove('hidden');

  var i = 0; // this is just an index
  // Go to the next item in bubblesCollection
  function nextBubble () {
    changeBubble(bubblesCollection[i]);
    i = (i + 1) % bubblesCollection.length;
  };
  // Remove the '.hidden' class on the next bubble
  // Stop if reached the end of the tree
  function changeBubble () {
    bubblesCollection[i].classList.remove('hidden');
    if (i === 4) {
      clearInterval(displayBubbles);
      loaderBubble.classList.add('hidden');
      reactionsCollection.classList.remove('hidden');
    }
  };
  // Start the interval and the start delay
  var displayBubbles = window.setInterval(nextBubble, 2000);
  window.setTimeout(displayBubbles, 1000);

  // Use it maybe later: addeventlistener to reactionButtonCollection
  // var reactionButtonCollection = document.querySelectorAll('.reactions .reaction__button');
  // for (var j = 0; j < reactionButtonCollection.length; j++) {
  //   reactionButtonCollection[j].addEventListener('click', clickReaction(this));
  // }
}());
