function Snake(f) {
      this.x = 40;
      this.y = 40;
      this.xspeed = 0;
      this.yspeed = 20;
      this.snakeBox = 20;
      this.snakeLength = 0;
      this.tail = [];


      this.update = () => {


            if (this.snakeLength == this.tail.length) {
                  for (let i = 0; i < this.snakeLength; i++) {
                        this.tail[i] = this.tail[i + 1];
                  }
            }
            if (this.snakeLength != 0) {
                  this.tail[this.snakeLength - 1] = { x: this.x, y: this.y, };
            };

            this.x = this.x + this.xspeed;
            this.y = this.y + this.yspeed;
            if (this.x < 0) this.x = 0;
            if (this.y < 0) this.y = 0;
            if (this.x > canvas.width - this.snakeBox) this.x = canvas.width - this.snakeBox;
            if (this.y > canvas.height - this.snakeBox) this.y = canvas.height - this.snakeBox;
            this.collision();


      }

      this.draw = (f) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = `rgb(40,200,20)`;
            ctx.strokeStyle = `rgb(0,0,0)`;
            for (let i = 0; i < this.snakeLength; i++) {
                  ctx.fillRect(this.tail[i].x, this.tail[i].y, this.snakeBox, this.snakeBox);
                  ctx.strokeRect(this.tail[i].x, this.tail[i].y, this.snakeBox, this.snakeBox);
                  //     console.log(`To jest ${i} iteracja a x wynosi: ${this.tail[i].x}`);
            }
            ctx.fillStyle = `rgb(40,255,20)`;
            ctx.fillRect(this.x, this.y, this.snakeBox, this.snakeBox);
            ctx.strokeRect(this.x, this.y, this.snakeBox, this.snakeBox);

            ctx.fillStyle = `rgb(250,0,0)`
            ctx.fillRect(f.x, f.y, this.snakeBox, this.snakeBox);
      }

      this.direction = (x, y) => {
            if (this.xspeed != 0) {
                  this.xspeed = 0;
                  this.yspeed = 20 * y;
            } else if (this.yspeed != 0) {
                  this.yspeed = 0;
                  this.xspeed = 20 * x;
            }

      }

      this.eat = (f) => {
            if (this.x == f.x && this.y == f.y) {
                  pickFoodLocation(food);
                  this.snakeLength++;
                  //console.log(this.tail);
            }
      }

      this.collision = () => {
            if (this.tail.some(i => (i.x == this.x && i.y == this.y))) {
                  this.x = 40;
                  this.y = 40;
                  this.xspeed = 0;
                  this.yspeed = 20;
                  this.snakeLength = 0;
                  this.tail = [];
            }
      }
}