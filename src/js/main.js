(function() {
    // Checking if browser supports Javascript
    var doc = document.documentElement;
    doc.classList.remove('no-js');
    doc.classList.add('js');

    // Instancing a few selectors
    var bubblesCollection = document.querySelectorAll('main > .conversation__bubble');

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
        if ((i === bubblesCollection.length - 1)) {
            clearInterval(displayBubbles);
        }
        scrollToLastBubble();
    };
    // Start the interval and the start delay
    var displayBubbles = window.setInterval(nextBubble, 1500);
    window.setTimeout(displayBubbles, 500);

    // On "read more" button click, open case study (and eventually clear already open case study)
    document.querySelectorAll('.previousWorks button').forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelectorAll('.casestudy__item').forEach(function(item) {
                if (item.classList.contains('is-active')) {
                    document.querySelector('.casestudy__item.is-active').classList.remove('is-active');
                }
            })
            clearInterval(displayBubbles);
            var caseStudyId = item.getAttribute('data-casestudy');
            document.querySelector('.conversation').classList.add('is-reading-casestudy');
            document.querySelector('body').classList.add(item.getAttribute('data-casestudy'));
            document.querySelector('.casestudy__item#' + caseStudyId).classList.add('is-active');
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        })
    });

    // On "back" button click, close the open case study
    document.querySelectorAll('.casestudies button').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelector('.conversation').classList.remove('is-reading-casestudy');
            document.querySelector('body').className = '';
            document.querySelector('.casestudy__item.is-active').classList.remove('is-active');
            window.setTimeout(function() {
                window.scroll({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })
            }, 400);
        })
    });
}());