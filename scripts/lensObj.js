import nodes from './nodes.js';
import data from './data.js';
import tools from './tools.js';
import animations from './animations.js';

function initializeLensObj() {
    tools.addAllPickups = addAllPickups;
    tools.addAllPickups();
}

function addAllPickups() {
    removeAllPickups();

    data.pickups.map((item) => {
        const pickupNode = document.createElement('img');
        pickupNode.src = item.img;
        pickupNode.classList.add('pickup');
        pickupNode.style.left = `${item.posX}%`;
        pickupNode.style.top = `${item.posY}%`;
        pickupNode.setAttribute('data-id', item.id);
        nodes.lensObjContainer.appendChild(pickupNode);

        pickupNode.addEventListener('click', (e) => {
            pickupNode.classList.add('found');
            nodes.crossAir.classList.remove('hover-pickup');
            animations.pickupFlyAway(pickupNode);

            nodes.scoreStars.style.left = `${pickupNode.getBoundingClientRect().x + (pickupNode.getBoundingClientRect().width / 2)}px`;
            nodes.scoreStars.style.top = `${pickupNode.getBoundingClientRect().y + (pickupNode.getBoundingClientRect().height / 2)}px`;
            animations.scoreStarsFly();

            nodes.pickupPuff.style.left = `${(nodes.lensObjContainer.getBoundingClientRect().width / 100) * Number.parseFloat(pickupNode.style.left.replace('%','')) + (pickupNode.getBoundingClientRect().width / 2)}px`;
            nodes.pickupPuff.style.top = `${(nodes.lensObjContainer.getBoundingClientRect().height / 100) * Number.parseFloat(pickupNode.style.top.replace('%','')) + (pickupNode.getBoundingClientRect().height / 2)}px`;
            animations.pickupPuff();
        });

        pickupNode.addEventListener('mouseenter', (e) => {
            if (!pickupNode.classList.contains('found')) {
                nodes.crossAir.classList.add('hover-pickup');
            }
        });

        pickupNode.addEventListener('mouseleave', (e) => {
            if (!pickupNode.classList.contains('found')) {
                nodes.crossAir.classList.remove('hover-pickup');
            }
        });
    });

    tools.updateScore();
}

function removeAllPickups() {
    const allPickups = document.querySelectorAll('.pickup');

    for (let i = 0; i < allPickups.length; i++) {
        const pickupNode = allPickups[i];
        pickupNode.parentNode.removeChild(pickupNode);
    }
}

export default initializeLensObj;