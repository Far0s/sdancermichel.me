(function() {
    // Checking if browser supports Javascript
    var doc = document.documentElement;
    doc.classList.remove('no-js');
    doc.classList.add('js');

    // Instancing a few selectors
    var bubblesCollection = document.querySelectorAll('.conversation__bubble--general');

    var i = 0; // this is just an index
    // Go to the nexts item in bubblesCollection
    function nextBubble() {
        changeBubble(bubblesCollection[i]);
        i = (i + 1) % bubblesCollection.length;
    };

    function scrollToLastBubble() {
        document.querySelector('.conversation__bubble:last-of-type').scrollIntoView({
            behavior: 'smooth'
        });
    }
    // Remove the '.hidden' class on the next bubble
    // Stop if reached the end of the tree
    function changeBubble() {
        bubblesCollection[i].classList.remove('hidden');
        scrollToLastBubble();
        if (i === bubblesCollection.length - 1) {
            clearInterval(displayBubbles);
        }
    };
    // Start the interval and the start delay
    var displayBubbles = window.setInterval(nextBubble, 2000);
    window.setTimeout(displayBubbles, 0);
}());