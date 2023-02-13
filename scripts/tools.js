import data from './data.js';
import nodes from './nodes.js';
import animations from './animations.js';

let tools = {
    createSparkle: (left, top, sparkleOpacity) => {
        const sparkleNode = document.createElement('div');
        sparkleNode.classList.add('sparkle');
        sparkleNode.style.top = `${top}px`;
        sparkleNode.style.left = `${left}px`;
        sparkleNode.style.opacity = sparkleOpacity;

        nodes.playAreaContainer.appendChild(sparkleNode);

        animations.sparkle(sparkleNode);
    },
    updateScore: () => {
        const allPickups = document.querySelectorAll('.pickup'),
            allFoundPickups = document.querySelectorAll('.pickup.found');

        nodes.scoreCounter.innerText = `${allFoundPickups.length} / ${allPickups.length}`;
    },
    addMiseEnScene: () => {
        tools.removeAllPickups();

        data.miseEnScene.map((item) => {
            tools.addMiseEnSceneItem(item);
        });

        tools.updateScore();
    },
    addMiseEnSceneItem: (item) => {
        const itemNode = document.createElement('img');
        itemNode.src = item.img;
        itemNode.style.left = `${item.posX}%`;
        itemNode.style.top = `${item.posY}%`;
        itemNode.setAttribute('data-id', item.id);
        nodes.lensMiseEnScene.appendChild(itemNode);

        switch (item.type) {
            case 'pickup':
                itemNode.classList.add('pickup');
                tools.addPickupClick(itemNode);
                tools.addPickupMouseEnter(itemNode);
                tools.addPickupMouseLeave(itemNode);
                break;

            default:
                break;
        }
    },
    addPickupClick: (itemNode) => {
        itemNode.addEventListener('click', (e) => {
            itemNode.classList.add('found');
            nodes.crossAir.classList.remove('hover-pickup');
            animations.pickupFlyAway(itemNode);

            nodes.scoreStars.style.left = `${itemNode.getBoundingClientRect().x + (itemNode.getBoundingClientRect().width / 2)}px`;
            nodes.scoreStars.style.top = `${itemNode.getBoundingClientRect().y + (itemNode.getBoundingClientRect().height / 2)}px`;
            animations.scoreStarsFly();

            nodes.pickupPuff.style.left = `${(nodes.lensObjContainer.getBoundingClientRect().width / 100) * Number.parseFloat(itemNode.style.left.replace('%','')) + (itemNode.getBoundingClientRect().width / 2)}px`;
            nodes.pickupPuff.style.top = `${(nodes.lensObjContainer.getBoundingClientRect().height / 100) * Number.parseFloat(itemNode.style.top.replace('%','')) + (itemNode.getBoundingClientRect().height / 2)}px`;
            animations.pickupPuff();
        });
    },
    addPickupMouseEnter: (itemNode) =>{
        itemNode.addEventListener('mouseenter', (e) => {
            if (!itemNode.classList.contains('found')) {
                nodes.crossAir.classList.add('hover-pickup');
            }
        });
    },
    addPickupMouseLeave: (itemNode) => {
        itemNode.addEventListener('mouseleave', (e) => {
            if (!itemNode.classList.contains('found')) {
                nodes.crossAir.classList.remove('hover-pickup');
            }
        });
    },
    removeAllPickups: () => {
        const allPickups = document.querySelectorAll('.pickup');

        for (let i = 0; i < allPickups.length; i++) {
            const pickupNode = allPickups[i];
            pickupNode.parentNode.removeChild(pickupNode);
        }
    }
};

export default tools;