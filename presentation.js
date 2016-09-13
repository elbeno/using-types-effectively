(function (window, undefined) {
    'use strict';

    window.addEventListener('load', function () {
        window.Reveal.addEventListener('slidechanged', function (event) {
            var achv = document.getElementById("achv"),
                achvParent = achv.parentNode,
                newachv = {};
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            if (event.indexv === 37) {
                newachv = achv.cloneNode(true);
                achvParent.removeChild(achv);
                setTimeout(function() {
                    achvParent.appendChild(newachv); }, 500);
            }
            window.Reveal.pause();
        });
    });

})(window);
