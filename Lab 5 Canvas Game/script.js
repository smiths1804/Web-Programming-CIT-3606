
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
const turtleImg = new Image();
const moleImg = new Image();

background.src = Images/Grass.jpg
turtleImg = Images/InnocentTurtle.png
moleImg = Images/Mole.png

const SPRITE_W = 120;
const SPRITE_H = 90;