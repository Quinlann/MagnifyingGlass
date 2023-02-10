function initializeAnimations() {
    window.animations = {};

    const scoreEncounterJumpTl = gsap.timeline();
    scoreEncounterJumpTl
    .add('start')
    .to(window.nodes.scoreEncounter, {
        y: -10,
        ease: "power2.out",
        duration: .25
    })
    .to(window.nodes.scoreEncounter, {
        y: 0,
        ease: "bounce.out",
        duration: .5
    })
    .to(window.nodes.scoreHud, {
        boxShadow: 'rgba(255 210 62 0) 0vw 0vw 5vw 5vw',
        duration: .5,
        ease: "circ.out",
        onComplete: () => {
            window.nodes.scoreHud.style.boxShadow = 'rgb(0 0 0 / 0%) 0vw 0vw 1.5vw 0vw';
        }
    }, 'start')
    .to(window.nodes.scoreHud, {
        boxShadow: 'black 0vw 0vw 1.5vw 0vw'
    }, 'start+=.5');
    
    scoreEncounterJumpTl.pause();

    window.animations.pickupFlyAway = (pickupNode) => {
        let tl = gsap.timeline();
        tl.to(pickupNode, {
            y: -75,
            rotate: 360,
            opacity: 0
        });
    }

    const scoreStarsTl = gsap.timeline();
    window.animations.scoreStarsFly = () => {
        scoreStarsTl.progress(0);
        scoreStarsTl.clear();

        window.nodes.scoreStars.style.display = 'block';

        const scoreStarsTop = window.nodes.scoreStars.getBoundingClientRect().top,
        scoreStarsLeft = window.nodes.scoreStars.getBoundingClientRect().left,
        scoreHudLeft = window.nodes.scoreHud.getBoundingClientRect().left + (window.nodes.scoreHud.getBoundingClientRect().width / 2);

        let frame = -1,
        starFlySpeed = window.data.starSpeed / 6;

        scoreStarsTl.to(window.nodes.scoreStars, {
            y: -1*scoreStarsTop,
            x: scoreHudLeft - scoreStarsLeft,
            duration: starFlySpeed,
            ease: "none",
            opacity: 0,
            onComplete: () => {
                scoreEncounterJumpTl.progress(0);
                scoreEncounterJumpTl.play();
                window.tools.updateScore();
                window.nodes.scoreStars.style.display = 'none';
            },
            onUpdate: () => {
                frame++;
                if(Number.isInteger(frame)) {
                    const sparkleLeft = window.nodes.scoreStars.getBoundingClientRect().left + (window.nodes.scoreStars.getBoundingClientRect().width / 2),
                    sparkleTop = window.nodes.scoreStars.getBoundingClientRect().top +  + (window.nodes.scoreStars.getBoundingClientRect().height / 2);

                    let sparkleOpacity = (starFlySpeed - (frame * starFlySpeed/60)) / starFlySpeed;

                    window.tools.createSparkle(sparkleLeft, sparkleTop, sparkleOpacity);
                }
            }
        });
    }

    window.animations.sparkle = (sparkleNode) => {
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
    
    window.animations.pickupPuff = () => {
        window.nodes.pickupPuff.style.display = 'block';
        
        pickupPuffTl.progress(0);
        pickupPuffTl.clear();

        pickupPuffTl.to(window.nodes.pickupPuff, {
            scale: 5,
            ease: "power4.out",
            opacity: 0,
            onComplete: () => {
                window.nodes.pickupPuff.style.display = 'none';
            }
        });
    }
}