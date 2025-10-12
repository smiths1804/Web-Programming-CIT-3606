

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

//Used to Set Random Coordinates
function randomPosForSprite(w,h){
    const padding = 8;
    const x = Math.floor(Math.random() * (canvas.width - w - padding * 2)) + padding;
    const y = Math.floor(Math.random() * (canvas.width - h - padding * 2)) + padding;
    return { x,y };
}

//Used to move sprite towards target
function moveTowards(sprite) {
    const dx = sprite.tx - sprite.x;
    const dy = sprite.ty - sprite.y;
    const dist = Math.hypot(dx,dy);
    if (dist < 1) return;
    const step = Math.min(sprite.speed, dist);
    sprite.x += (dx / dist) * step;
    sprite.y += (dy / dist) * step;
}

//Draws Everything
function drawScene(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(turtleImg, turtle.x, turtle.y, turtle.w, turtle.h);
    ctx.drawImage(moleImg, mole.x, mole.y, mole.w, mole.h);
}

