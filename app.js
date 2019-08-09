const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//const snakeBox = 20;


let food = {
      x: Math.floor(Math.random() * 24) * 20,
      y: Math.floor(Math.random() * 24) * 20,
}

pickFoodLocation = (food) => {
      food.x = Math.floor(Math.random() * 24) * 20;
      food.y = Math.floor(Math.random() * 24) * 20;
}

let update = setInterval(() => {
      s.update();
      s.eat(food);
      s.draw(food);
}, 100);


const setDirection = (e) => {
      let key = e.keyCode;
      if (key == 37 && s.xspeed == 0) {
            s.direction(-1, 0);
      }
      else if (key == 38 && s.yspeed == 0) {
            s.direction(0, -1);
      }
      else if (key == 39 && s.xspeed == 0) {
            s.direction(1, 0);
      }
      else if (key == 40 && s.yspeed == 0) {
            s.direction(0, 1);
      }
}

document.addEventListener('keydown', setDirection);
let s = new Snake(food);























// let snake = [];
// snake[0] = {
//       x: 0 * snakeBox,
//       y: 0 * snakeBox,
// };




// let food = {
//       x: Math.floor(Math.random() * 24) * snakeBox,
//       y: Math.floor(Math.random() * 24) * snakeBox,
// }

// let score = 0;

// draw = () => {

//       for (let i = 0; i < snake.length; i++) {
//             ctx.fillStyle = i == 0 ? "black" : "green";
//             ctx.strokeStyle = "grey";
//             ctx.fillRect(snake[i].x, snake[i].y, snakeBox, snakeBox);
//             ctx.strokeRect(snake[i].x, snake[i].y, snakeBox, snakeBox);
//       }

//       radianAngle = (angle) => {
//             return radians = ((Math.PI) / 180) * angle;
//       }

//       ctx.beginPath();
//       ctx.arc(food.x + (0.5 * snakeBox), food.y + (0.5 * snakeBox), 10, radianAngle(0), radianAngle(360));
//       ctx.stroke();
//       ctx.fillStyle = "red";
//       ctx.fill();
// }

//let game = setInterval(draw, 200);
