"use strict"
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext("2d");

//create the unit
const box=30;

//background color temporary
// ctx.fillStyle = 'rgba(255, 255, 255, 1)';
ctx.fillRect(0,0,canvas.width,canvas.height);

//create color variable
let maincolor='#57ff24';

//get color buttons
let b1=document.getElementById('c1button');
//get bodymain color
let root=document.documentElement;
//set body and button colors
b1.addEventListener("click",function()
{
  maincolor="white";
   root.style.setProperty('--bodycolor',"white");
});

let b2=document.getElementById('c2button');
b2.addEventListener("click",function()
{
  maincolor="#08d9d6";
  root.style.setProperty('--bodycolor',"#08d9d6");
});

let b3=document.getElementById('c3button');
b3.addEventListener("click",function()
{
  maincolor="#ff2e63";
  root.style.setProperty('--bodycolor',"#ff2e63");
});

let b4=document.getElementById('c4button');
b4.addEventListener("click",function()
{
  maincolor="#57ff24";
  root.style.setProperty('--bodycolor',"#57ff24");
});

//audio files
  const dead=new Audio();
  const eat=new Audio();
  const up=new Audio();
  const left=new Audio();
  const right=new Audio();
  const down=new Audio();

  dead.src="audio/dead.mp3";
  eat.src="audio/eat.mp3"
  up.src="audio/up.mp3"
  left.src="audio/left.mp3"
  right.src="audio/right.mp3"
  down.src="audio/down.mp3"
//Snake

let snake = [];
snake[0] = {
  x : 9 * box,
  y : 10 * box,
}

//food

let food = {
  x : Math.floor(Math.random()*26+1) * box,
  y : Math.floor(Math.random()*22+1)  * box
}

//Score

let score = 0;

//control the snake
let d;

document.addEventListener("keydown",direction);

function direction(event)
{
  if(event.keyCode == 37 && d !="RIGHT")
  {
    left.play();
    d = "LEFT";
  }
  else if(event.keyCode == 38 && d !="DOWN")
  {
    up.play();
    d = "UP";
  }
  else if(event.keyCode == 39 && d !="LEFT")
  {
    right.play();
    d = "RIGHT";
  }
  else if(event.keyCode == 40 && d !="UP")
  {
    down.play();
    d = "DOWN";
  }
}

//collision function

function collision(nhead,array)
{
  for(let i=0; i < array.length; i++)
  {
    if(nhead.x == array[i].x && nhead.y == array[i].y)
    {
      return true;
    }
  }
  return false;
}

//animation
function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //create border

  // ctx.beginPath();
  // ctx.moveTo(0,30);
  // ctx.lineTo(802,30);
  // ctx.moveTo(0,690);
  // ctx.lineTo(802,690);
  // ctx.moveTo(30,0);
  // ctx.lineTo(30,702);
  // ctx.moveTo(783,0);
  // ctx.lineTo(783,702);
  // ctx.strokeStyle = 'white';
  // ctx.stroke();

  ctx.fillStyle =maincolor;
  ctx.fillRect(0,0,802,30);
  ctx.fillRect(0,690,802,30);
  ctx.fillRect(0,0,30,702);
  ctx.fillRect(783,0,30,702);

  for( let i=0; i< snake.length ; i++)
  {
    // ctx.fillStyle = 'white';
    ctx.fillRect(snake[i].x,snake[i].y,box,box);
  }
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  //circle food
  // ctx.fillStyle = "white";
  // ctx.beginPath();
  // ctx.arc(food.x,food.y,15,2, 3* Math.PI);
  // ctx.fill();
  // ctx.fillStyle = 'white';
  ctx.fillRect(food.x,food.y,21,21);


  //old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //direction
  if( d == "LEFT") snakeX -=box;
  if( d == "UP") snakeY -=box;
  if( d == "RIGHT") snakeX +=box;
  if( d == "DOWN") snakeY +=box;

  //increase snake size
  if(snakeX == food.x && snakeY == food.y)
  {
    score++;
    eat.play();
    food = {
      x : Math.floor(Math.random()*25+1)  * box,
      y : Math.floor(Math.random()*22+1) * box
    }
  }
  else {
    //remove tail
    snake.pop();
  }

  //NEW HEAD

  let newHead = {
    x : snakeX,
    y : snakeY
  }


  //game over

  if(snakeX < box || snakeX > 25 * box || snakeY < 5 || snakeY > 22 * box || collision(newHead,snake))
  {
    clearInterval(game);
    dead.play();
  }

  snake.unshift(newHead);


  //display score output
  var snakeScore=document.getElementById('score');
  snakeScore.innerHTML=score;
}

//call function every second

let game = setInterval(draw,100);
