import nodes from './nodes.js'

const miseEnScene = [
    {
        scene: 'start',
        items: [
            {
                name: 'Start 1',
                posX: 37.44,
                posY: 49.35,
                img: './assets/encounter-token.png',
                type: 'pickup'
            },
            {
                name: 'Start 0',
                posX: 48.44,
                posY: 19.35,
                img: './assets/encounter-token.png',
                type: 'pickup'
            }
        ]
    },
    {
        scene: 'village',
        items: [
            {
                name: 'Village bottom',
                posX: 64.59,
                posY: 91.04,
                img: './assets/encounter-token.png',
                type: 'pickup'
            },
            {
                name: 'Village at top',
                posX: 74.42,
                posY: 62.42,
                img: './assets/encounter-token.png',
                type: 'pickup'
            }
        ]
    },
    {
        scene: 'mine',
        items: [
            {
                name: 'Mine in fog',
                posX: 12.15,
                posY: 94.03,
                img: './assets/encounter_mine_infog.png',
                type: 'pickup'
            },
            {
                name: 'Mine at top',
                posX: 18.71,
                posY: 76.85,
                img: './assets/encounter-token.png',
                type: 'pickup'
            },
            {
                name: 'Water',
                posX: 46.69,
                posY: 88.71,
                img: './assets/encounter_water.png',
                type: 'pickup'
            }
        ]
    },
    {
        scene: 'oil',
        items: [
            {
                name: 'Oil at top',
                posX: 74.42,
                posY: 9.75,
                img: './assets/encounter-token.png',
                type: 'pickup'
            },
            {
                name: 'Oil in pit',
                posX: 83.25,
                posY: 13.11,
                img: './assets/encounter_oil_inpit.png',
                type: 'pickup'
            },
            {
                name: 'Oil at house',
                posX: 88.87,
                posY: 18.79,
                img: './assets/encounter-token.png',
                type: 'pickup'
            }
        ]
    },
    {
        scene: 'mech shop',
        items: [
            {
                name: 'Mech shop in back',
                posX: 11.57,
                posY: 11.78,
                img: './assets/encounter_mech_shop_inback.png',
                type: 'pickup'
            },
            {
                name: 'Forest',
                posX: 6.48,
                posY: 31.25,
                img: './assets/encounter_forest.png',
                type: 'pickup'
            },
            {
                name: 'Snow',
                posX: 27.37,
                posY: 19.43,
                img: './assets/encounter_snow.png',
                type: 'pickup'
            }
        ]
    }
]

miseEnScene.map((item, index) => {
    item.id = index;
});

let data = {
    backgroundImgWidth: nodes.backgroundImg.getBoundingClientRect().width,
    backgroundImgHeight: nodes.backgroundImg.getBoundingClientRect().height,
    imgXonPage: window.scrollX + nodes.backgroundImg.getBoundingClientRect().x,
    imgYonPage: window.scrollY + nodes.backgroundImg.getBoundingClientRect().y,
    miseEnScene: miseEnScene,
    starSpeed: 5
};

export default data;