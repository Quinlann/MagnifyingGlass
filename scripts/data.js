import nodes from './nodes.js'

const pickups = [{
        id: 0,
        name: 'Mech shop in back',
        posX: 11.57,
        posY: 11.78,
        img: "./assets/encounter_mech_shop_inback.png"
    },
    {
        id: 1,
        name: 'Mine in fog',
        posX: 12.15,
        posY: 94.03,
        img: "./assets/encounter_mine_infog.png"
    },
    {
        id: 2,
        name: 'Mine at top',
        posX: 18.71,
        posY: 76.85,
        img: "./assets/encounter-token.png"
    },
    {
        id: 3,
        name: 'Oil at top',
        posX: 74.42,
        posY: 9.75,
        img: "./assets/encounter-token.png"
    },
    {
        id: 4,
        name: 'Oil in pit',
        posX: 83.25,
        posY: 13.11,
        img: "./assets/encounter_oil_inpit.png"
    },
    {
        id: 5,
        name: 'Oil at house',
        posX: 88.87,
        posY: 18.79,
        img: "./assets/encounter-token.png"
    },
    {
        id: 6,
        name: 'Water',
        posX: 46.69,
        posY: 88.71,
        img: "./assets/encounter_water.png"
    },
    {
        id: 7,
        name: 'Start 1',
        posX: 37.44,
        posY: 49.35,
        img: "./assets/encounter-token.png"
    },
    {
        id: 8,
        name: 'Forest',
        posX: 6.48,
        posY: 31.25,
        img: "./assets/encounter_forest.png"
    },
    {
        id: 9,
        name: 'Snow',
        posX: 27.37,
        posY: 19.43,
        img: "./assets/encounter_snow.png"
    },
    {
        id: 10,
        name: 'Farm bottom',
        posX: 64.59,
        posY: 91.04,
        img: "./assets/encounter-token.png"
    },
    {
        id: 11,
        name: 'Farm at top',
        posX: 74.42,
        posY: 62.42,
        img: "./assets/encounter-token.png"
    },
    {
        id: 12,
        name: 'Start 0',
        posX: 48.44,
        posY: 19.35,
        img: "./assets/encounter-token.png"
    }
]

let data = {
    backgroundImgWidth: nodes.backgroundImg.getBoundingClientRect().width,
    backgroundImgHeight: nodes.backgroundImg.getBoundingClientRect().height,
    imgXonPage: window.scrollX + nodes.backgroundImg.getBoundingClientRect().x,
    imgYonPage: window.scrollY + nodes.backgroundImg.getBoundingClientRect().y,
    pickups: pickups,
    starSpeed: 5
};

export default data;