# Snake Game
A Conventional Snake Game developed using pure Javascript.

http://snaky.netlify.com

![alt tag](https://github.com/mohdsauood/Snake-Game/blob/master/design.PNG)

## How It's Made:

**Tech used:** HTML,CSS,JavaScript

The game has simple rules ! Player controls the snake which moves in straight lines and avoid hitting the wall and itself.To create the foundation i used HTML Canvas.Canvas objects can be manipulated using javascript.So,the Structure of Snake and its food is laid out on the canvas .To move the snake,i used an array to add and remove the head and tail of the snake.The food is randomly generated with x an y co-ordinates using random function.By detecting the user input from the keyboard the snake's length is incremented in the input's direction(i.e left,right,up,down).

## Lessons Learned :

Debugging was the major task in the project,like knowning what value the head of the snake holds and removing the last value of the snake array was crucial.While relative units have made it easier for making things responsive,canvas brought me back to static lengths and positioning.Canvas is entirely just visualising things beforehand.Once you know where things belong in a canvas its easy to implement it .i wanted to use jquery for animations but i learned javascript can manipulate css properties using many event handlers.
