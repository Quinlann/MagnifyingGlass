import data from './data.js'
import nodes from './nodes.js'
import tools from './tools.js'

let animations = {

};

const scoreEncounterJumpTl = gsap.timeline();
scoreEncounterJumpTl
.add('start')
.to(nodes.scoreEncounter, {
    y: -10,
    ease: "power2.out",
    duration: .25
})
.to(nodes.scoreEncounter, {
    y: 0,
    ease: "bounce.out",
    duration: .5
})
.to(nodes.scoreHud, {
    boxShadow: 'rgba(255 210 62 0) 0vw 0vw 5vw 5vw',
    duration: .5,
    ease: "circ.out",
    onComplete: () => {
        nodes.scoreHud.style.boxShadow = 'rgb(0 0 0 / 0%) 0vw 0vw 1.5vw 0vw';
    }
}, 'start')
.to(nodes.scoreHud, {
    boxShadow: 'black 0vw 0vw 1.5vw 0vw'
}, 'start+=.5');

scoreEncounterJumpTl.pause();

animations.pickupFlyAway = (pickupNode) => {
    let tl = gsap.timeline();
    tl.to(pickupNode, {
        y: -75,
        rotate: 360,
        opacity: 0
    });
}

const scoreStarsTl = gsap.timeline();
animations.scoreStarsFly = () => {
    scoreStarsTl.progress(0);
    scoreStarsTl.clear();

    nodes.scoreStars.style.display = 'block';

    const scoreStarsTop = nodes.scoreStars.getBoundingClientRect().top,
    scoreStarsLeft = nodes.scoreStars.getBoundingClientRect().left,
    scoreHudLeft = nodes.scoreHud.getBoundingClientRect().left + (nodes.scoreHud.getBoundingClientRect().width / 2);

    let frame = -1,
    starFlySpeed = data.starSpeed / 6;

    scoreStarsTl.to(nodes.scoreStars, {
        y: -1*scoreStarsTop,
        x: scoreHudLeft - scoreStarsLeft,
        duration: starFlySpeed,
        ease: "none",
        opacity: 0,
        onComplete: () => {
            scoreEncounterJumpTl.progress(0);
            scoreEncounterJumpTl.play();
            tools.updateScore();
            nodes.scoreStars.style.display = 'none';
        },
        onUpdate: () => {
            frame++;
            if(Number.isInteger(frame)) {
                const sparkleLeft = nodes.scoreStars.getBoundingClientRect().left + (nodes.scoreStars.getBoundingClientRect().width / 2),
                sparkleTop = nodes.scoreStars.getBoundingClientRect().top +  + (nodes.scoreStars.getBoundingClientRect().height / 2);

                let sparkleOpacity = (starFlySpeed - (frame * starFlySpeed/60)) / starFlySpeed;

                tools.createSparkle(sparkleLeft, sparkleTop, sparkleOpacity);
            }
        }
    });
}

animations.sparkle = (sparkleNode) => {
    let tl = gsap.timeline();
    tl.to(sparkleNode, {
        opacity: 0,
        x: ((Math.random() * 500) - 250),
        y: ((Math.random() * 500) - 250),
        width: 0,
        duration: 2,
        onComplete: () => {
            sparkleNode.parentNode.removeChild(sparkleNode);
        }
    })
}

let pickupPuffTl = gsap.timeline();

animations.pickupPuff = () => {
    nodes.pickupPuff.style.display = 'block';
    
    pickupPuffTl.progress(0);
    pickupPuffTl.clear();

    pickupPuffTl.to(nodes.pickupPuff, {
        scale: 5,
        ease: "power4.out",
        opacity: 0,
        onComplete: () => {
            nodes.pickupPuff.style.display = 'none';
        }
    });
}

export default animations;