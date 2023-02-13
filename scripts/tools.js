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
    }
};

export default tools;