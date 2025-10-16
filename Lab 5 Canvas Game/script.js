

//Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Image implementation
const background = new Image();
const turtleImg = new Image();
const moleImg = new Image();

background.src = "Images/Grass.jpg";
turtleImg.src = "Images/InnocentTurtle.png";
moleImg.src = "Images/Mole.png";

const SPRITE_W = 120;
const SPRITE_H = 90;

//Initial State
let score = 0;
const scoreEl = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');

//The sprite objects
const turtle = {
    x: 100, y: 100, tx: 100, ty: 100, 
    w: SPRITE_W, h: SPRITE_W, 
    Speed: 5, 
    name: 'Turtle'};
const mole = {
    x: 600, y: 300, tx: 600, ty: 300, 
    w: SPRITE_W, h: SPRITE_W, 
    Speed: 7, 
    name: 'Mole'};

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
    const x = Math.floor(Math.random() * (canvas.width - w - padding * 2));
    const y = Math.floor(Math.random() * (canvas.height - h - padding * 2));
    // Changed to keep spawns within range-
    return { x, y };
}

function clampPosition(sprite){
    sprite.x = Math.max(0, Math.min(sprite.x, canvas.width - sprite.w));
    sprite.y = Math.max(0, Math.min(sprite.y, canvas.height - sprite.h));
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
    clampPosition(sprite)
}

//Draws Everything
function drawScene(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(turtleImg, turtle.x, turtle.y, turtle.w, turtle.h);
    ctx.drawImage(moleImg, mole.x, mole.y, mole.w, mole.h);
}

//Animation Loop

function loop() {
    moveTowards(turtle);
    moveTowards(mole);
    drawScene();
    requestAnimationFrame(loop);
}

// Random Target movement

let moveIntervalid = null;
function startMovementInterval(){
    moveIntervalid = setInterval(() => {
        const t = randomPosForSprite(turtle.w, turtle.h);
        turtle.tx = t.x;
        turtle.ty = t.y;
        
        const m = randomPosForSprite(mole.w, mole.h);
        mole.tx = m.x;
        mole.ty = m.y;
    }, 900);
}

// Collision Helpers

function pointInSprite(px, py, sprite) {
    return (
        px >= sprite.x &&
        px <= sprite.x + sprite.w &&
        py >= sprite.y &&
        py <= sprite.y + sprite.h
    );
}

canvas.addEventListener('mousedown', function (e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    if(pointInSprite(x,y,turtle)) {
        score -= 1;
        scoreEl.textContent = score;
        alert('Ouch! You clicked the ${turtle.name}.\nScore: ${score}');
        const newPos = randomPosForSprite(turtle.w, turtle.h);
        turtle.tx = newPos.x;
        turtle.ty = newPos.y;
        return
    }
        if(pointInSprite(x,y,mole)) {
        score += 1;
        scoreEl.textContent = score;
        alert('Nice! You clicked the ${mole.name}.\nScore: ${score}');
        const newPos = randomPosForSprite(mole.w, mole.h);
        mole.tx = newPos.x;
        mole.ty = newPos.y;
        return;
    }

    score -= 1;
    scoreEl.textContent = score;
    if (score % 10 === 0) alert('Missed! -1 Point. Score: ${score}');
});

// Code to start the game
function startGame(){
    const p1 = randomPosForSprite(turtle.w, turtle.h);
    const p2 = randomPosForSprite(mole.w, mole.h);
    turtle.x = turtle.tx = p1.x;
    turtle.y = turtle.ty = p1.y;
    mole.x = mole.tx = p2.x;
    mole.y = mole.ty = p2.y;
    
    startMovementInterval();
    requestAnimationFrame(loop);
}

resetBtn.addEventListener('click', () => {
    score = 0;
    scoreEl.textContent = score;
    alert('Score reset to 0');
});

