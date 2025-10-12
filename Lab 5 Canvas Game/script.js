

//Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Image implementation
const background = new Image();
const turtleImg = new Image();
const moleImg = new Image();

background.src = Images/Grass.jpg
turtleImg = Images/InnocentTurtle.png
moleImg = Images/Mole.png

const SPRITE_W = 120;
const SPRITE_H = 90;

//Initial State
let score = 0;
const scoreEl = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');

//The sprite objects
const turtle = {x: 100, y: 100, tx: 100, ty: 100, w: SPRITE_W, h: SPRITE_W, Speed: 5, name: 'Turtle'};
const mole = {x: 600, y: 300, tx: 600, ty: 300, w: SPRITE_W, h: SPRITE_W, Speed: 7, name: 'Mole'};

//Image loading
let imgsLoaded = 0;
    [background, turtleImg, moleImg].forEach(img => {
        img.onload = () => {
            imgsLoaded++;
            if(imgsLoaded === 3) startGame();
        };
        img.onerror = () => alert('Failed to load ${img.src}'
        );
});


