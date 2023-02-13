import data from './scripts/data.js';
import initializeLensObj from './scripts/lensObj.js';
import lens from './scripts/lens.js'

window.onload = () => {
    (function () {
        initializeLensObj();
        lens.initializeLens();
        if (false) initializePositionLocator();
    })();

    document.addEventListener('mousemove', function (e) {
        lens.updateLens(e);
    });

    window.addEventListener('resize', function (e) {
        data.imgXonPage = window.scrollX + nodes.backgroundImg.getBoundingClientRect()
            .x;
        data.imgYonPage = window.scrollY + nodes.backgroundImg.getBoundingClientRect()
            .y;
        setLensSize();

        nodes.lensContainer.style.display = 'none';
    });

    // disable rightclick
    // window.addEventListener('contextmenu', event => event.preventDefault());
}