function initializeLens() {
    setLensSize();
}

function updateLens(e) {
    window.nodes.lensContainer.classList.remove('hidden');
    window.nodes.crossAirContainer.classList.remove('hidden');

    const mouseXinImg = e.pageX - window.data.imgXonPage,
        mouseYinImg = e.pageY - window.data.imgYonPage;

    if (mouseXinImg < 0 || mouseXinImg > window.data.backgroundImgWidth || mouseYinImg < 0 || mouseYinImg > window.data.backgroundImgHeight) {
        window.nodes.lensContainer.classList.add('hidden');
        window.nodes.crossAirContainer.classList.add('hidden');
        return
    }

    const lensXinImg = (mouseXinImg - (window.nodes.lensNode.getBoundingClientRect().width / 2)),
        lensYinImg = (mouseYinImg - (window.nodes.lensNode.getBoundingClientRect().height / 2));

    updateLensPos(lensXinImg, lensYinImg);
}

function updateLensPos(lensXinImg, lensYinImg) {
    const lensWidth = window.nodes.lensNode.getBoundingClientRect().width,
        lensHeight = window.nodes.lensNode.getBoundingClientRect().height;

    window.nodes.lensContainer.style.left = `${lensXinImg}px`;
    window.nodes.lensContainer.style.top = `${lensYinImg}px`;
    window.nodes.lensObjContainer.style.left = `${(-2*lensXinImg) - (lensWidth/2)}px`;
    window.nodes.lensObjContainer.style.top = `${(-2*lensYinImg) - (lensHeight/2)}px`;
    window.nodes.crossAirContainer.style.left = `${lensXinImg + (window.nodes.lensContainer.getBoundingClientRect().width / 2)}px`;
    window.nodes.crossAirContainer.style.top = `${lensYinImg + (window.nodes.lensContainer.getBoundingClientRect().height / 2)}px`;

    window.nodes.lensFlares.style.backgroundPositionX = `${(-2*lensXinImg) - (lensWidth/2)}px`
}

function setLensSize() {
    const lensWidthPct = 10;

    window.data.backgroundImgWidth = window.nodes.backgroundImg.getBoundingClientRect().width;
    window.data.backgroundImgHeight = window.nodes.backgroundImg.getBoundingClientRect().height;

    window.nodes.lensNode.style.width = `${(window.data.backgroundImgWidth/100)*lensWidthPct}px`;
    window.nodes.lensNode.style.height = `${(window.data.backgroundImgWidth/100)*lensWidthPct}px`;

    window.nodes.lensObjContainer.style.width = `${window.data.backgroundImgWidth * 2}px`;
    window.nodes.lensObjContainer.style.height = `${window.data.backgroundImgHeight * 2}px`;

    window.nodes.lensContainer.style.width = `${(window.data.backgroundImgWidth/100)*lensWidthPct}px`;
    window.nodes.lensContainer.style.height = `${(window.data.backgroundImgWidth/100)*lensWidthPct}px`;
}