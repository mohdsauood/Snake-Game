"use strict"
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext("2d");

//create the unit
const box=30;

//background color temporary
// ctx.fillStyle = 'rgba(255, 255, 255, 1)';
ctx.fillRect(0,0,canvas.width,canvas.height);

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
    d = "LEFT";
  }
  else if(event.keyCode == 38 && d !="DOWN")
  {
    d = "UP";
  }
  else if(event.keyCode == 39 && d !="LEFT")
  {
    d = "RIGHT";
  }
  else if(event.keyCode == 40 && d !="UP")
  {
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
  for( let i=0; i< snake.length ; i++)
  {
    ctx.fillStyle = 'white';
    ctx.fillRect(snake[i].x,snake[i].y,box,box);
  }
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  //circle food
  // ctx.fillStyle = "white";
  // ctx.beginPath();
  // ctx.arc(food.x,food.y,15,2, 3* Math.PI);
  // ctx.fill();
  ctx.fillStyle = 'white';
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
  }

  snake.unshift(newHead);


  //display score output
  var snakeScore=document.getElementById('score');
  snakeScore.innerHTML=score;
}

//call function every second

let game = setInterval(draw,100);
