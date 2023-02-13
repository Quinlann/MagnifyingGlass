// position locator

function initializePositionLocator() {
    document.querySelector('#lens').style.overflow = 'visible';
    window.addEventListener('click', (e) => {

        let leftPosPrc,
            topPosPrc;

        if ((window.data.imgXonPage - e.x) < 0) {
            leftPosPrc = (Math.abs(window.data.imgXonPage - e.x) / window.data.backgroundImgWidth) * 100;
            if (leftPosPrc > 100) leftPosPrc = false;
        }

        if ((window.data.imgYonPage - e.y) < 0) {
            topPosPrc = (Math.abs(window.data.imgYonPage - e.y) / window.data.backgroundImgHeight) * 100;
            if (topPosPrc > 100) topPosPrc = false;
        }

        if (leftPosPrc && topPosPrc) {
            window.data.miseEnScene.push({
                id: window.data.miseEnScene.length,
                posX: leftPosPrc,
                posY: topPosPrc,
                img: './assets/encounter-token.png'
            });
            window.tools.addAllPickups();
        }

        console.log(window.data.miseEnScene);
    });
}