const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const score = document.getElementById('score');


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
      return score.textContent = `Score : ${s.snakeLength}`;
}, 100);


const setDirection = (e) => {
      let key = e.keyCode;
      if (key == 37 && s.xspeed == 0) {
            s.direction(-1, 0);
            s.update();
            s.eat(food);
      }
      else if (key == 38 && s.yspeed == 0) {
            s.direction(0, -1);
            s.update();
            s.eat(food);
      }
      else if (key == 39 && s.xspeed == 0) {
            s.direction(1, 0);
            s.update();
            s.eat(food);
      }
      else if (key == 40 && s.yspeed == 0) {
            s.direction(0, 1);
            s.update();
            s.eat(food);
      }
}

document.addEventListener('keydown', setDirection);
let s = new Snake(food);
