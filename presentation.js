(function (window, undefined) {
    'use strict';

    window.addEventListener('load', function () {
        window.Reveal.addEventListener('slidechanged', function (event) {
            var achv = document.getElementById("achv"),
                newachv = {};
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            if (event.indexh === 29) {
                newachv = achv.cloneNode(true);
                achv.parentNode.replaceChild(newachv, achv);
            }
            window.Reveal.pause();
        });
    });

})(window);
