function initializeTools() {
    window.tools = {};

    window.tools.createSparkle = (left, top, sparkleOpacity) => {
        const sparkleNode = document.createElement('div');
        sparkleNode.classList.add('sparkle');
        sparkleNode.style.top = `${top}px`;
        sparkleNode.style.left = `${left}px`;
        sparkleNode.style.opacity = sparkleOpacity;

        window.nodes.playAreaContainer.appendChild(sparkleNode);

        window.animations.sparkle(sparkleNode);
    }

    window.tools.updateScore = () => {
        const allPickups = document.querySelectorAll('.pickup'),
            allFoundPickups = document.querySelectorAll('.pickup.found');
    
        window.nodes.scoreCounter.innerText = `${allFoundPickups.length} / ${allPickups.length}`;
    }
}