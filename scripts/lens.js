import nodes from './nodes.js'
import data from './data.js'

let lens = {
    initializeLens: initializeLens,
    updateLens: updateLens,
    setLensSize: setLensSize
}

function initializeLens() {
    setLensSize();
}

function updateLens(e) {
    nodes.lensContainer.classList.remove('hidden');
    nodes.crossAirContainer.classList.remove('hidden');

    const mouseXinImg = e.pageX - data.imgXonPage,
        mouseYinImg = e.pageY - data.imgYonPage;

    if (mouseXinImg < 0 || mouseXinImg > data.backgroundImgWidth || mouseYinImg < 0 || mouseYinImg > data.backgroundImgHeight) {
        nodes.lensContainer.classList.add('hidden');
        nodes.crossAirContainer.classList.add('hidden');
        return
    }

    const lensXinImg = (mouseXinImg - (nodes.lensNode.getBoundingClientRect().width / 2)),
        lensYinImg = (mouseYinImg - (nodes.lensNode.getBoundingClientRect().height / 2));

    updateLensPos(lensXinImg, lensYinImg);
}

function updateLensPos(lensXinImg, lensYinImg) {
    const lensWidth = nodes.lensNode.getBoundingClientRect().width,
        lensHeight = nodes.lensNode.getBoundingClientRect().height;

    nodes.lensContainer.style.left = `${lensXinImg}px`;
    nodes.lensContainer.style.top = `${lensYinImg}px`;
    nodes.lensObjContainer.style.left = `${(-2*lensXinImg) - (lensWidth/2)}px`;
    nodes.lensObjContainer.style.top = `${(-2*lensYinImg) - (lensHeight/2)}px`;
    nodes.crossAirContainer.style.left = `${lensXinImg + (nodes.lensContainer.getBoundingClientRect().width / 2)}px`;
    nodes.crossAirContainer.style.top = `${lensYinImg + (nodes.lensContainer.getBoundingClientRect().height / 2)}px`;

    nodes.lensFlares.style.backgroundPositionX = `${(-2*lensXinImg) - (lensWidth/2)}px`
}

function setLensSize() {
    const lensWidthPct = 10;

    data.backgroundImgWidth = nodes.backgroundImg.getBoundingClientRect().width;
    data.backgroundImgHeight = nodes.backgroundImg.getBoundingClientRect().height;

    nodes.lensNode.style.width = `${(data.backgroundImgWidth/100)*lensWidthPct}px`;
    nodes.lensNode.style.height = `${(data.backgroundImgWidth/100)*lensWidthPct}px`;

    nodes.lensObjContainer.style.width = `${data.backgroundImgWidth * 2}px`;
    nodes.lensObjContainer.style.height = `${data.backgroundImgHeight * 2}px`;

    nodes.lensContainer.style.width = `${(data.backgroundImgWidth/100)*lensWidthPct}px`;
    nodes.lensContainer.style.height = `${(data.backgroundImgWidth/100)*lensWidthPct}px`;
}

export default lens;