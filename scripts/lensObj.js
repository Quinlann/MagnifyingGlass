function initializeLensObj() {
    window.tools.addAllPickups = addAllPickups;
    window.tools.addAllPickups();
}

function addAllPickups() {
    removeAllPickups();

    window.data.pickups.map((item) => {
        const pickupNode = document.createElement('img');
        pickupNode.src = item.img;
        pickupNode.classList.add('pickup');
        pickupNode.style.left = `${item.posX}%`;
        pickupNode.style.top = `${item.posY}%`;
        pickupNode.setAttribute('data-id', item.id);
        window.nodes.lensObjContainer.appendChild(pickupNode);

        pickupNode.addEventListener('click', (e) => {
            pickupNode.classList.add('found');
            window.nodes.crossAir.classList.remove('hover-pickup');
            window.animations.pickupFlyAway(pickupNode);

            window.nodes.scoreStars.style.left = `${pickupNode.getBoundingClientRect().x + (pickupNode.getBoundingClientRect().width / 2)}px`;
            window.nodes.scoreStars.style.top = `${pickupNode.getBoundingClientRect().y + (pickupNode.getBoundingClientRect().height / 2)}px`;
            window.animations.scoreStarsFly();

            window.nodes.pickupPuff.style.left = `${(window.nodes.lensObjContainer.getBoundingClientRect().width / 100) * Number.parseFloat(pickupNode.style.left.replace('%','')) + (pickupNode.getBoundingClientRect().width / 2)}px`;
            window.nodes.pickupPuff.style.top = `${(window.nodes.lensObjContainer.getBoundingClientRect().height / 100) * Number.parseFloat(pickupNode.style.top.replace('%','')) + (pickupNode.getBoundingClientRect().height / 2)}px`;
            window.animations.pickupPuff();
        });

        pickupNode.addEventListener('mouseenter', (e) => {
            if (!pickupNode.classList.contains('found')) {
                window.nodes.crossAir.classList.add('hover-pickup');
            }
        });

        pickupNode.addEventListener('mouseleave', (e) => {
            if (!pickupNode.classList.contains('found')) {
                window.nodes.crossAir.classList.remove('hover-pickup');
            }
        });
    });

    window.tools.updateScore();
}

function removeAllPickups() {
    const allPickups = document.querySelectorAll('.pickup');

    for (let i = 0; i < allPickups.length; i++) {
        const pickupNode = allPickups[i];
        pickupNode.parentNode.removeChild(pickupNode);
    }
}