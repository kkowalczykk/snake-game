function Snake(f) {
      this.x = 40;
      this.y = 40;
      this.xspeed = 0;
      this.yspeed = 20;
      this.snakeBox = 20

      this.update = (f) => {
            ctx.clearRect(this.x, this.y, canvas.width, canvas.height);
            this.x = this.x + this.xspeed;
            this.y = this.y + this.yspeed;
            if (this.x < 0) this.x = 0;
            if (this.y < 0) this.y = 0;

            if (this.x > canvas.width - this.snakeBox) this.x = canvas.width - this.snakeBox;
            if (this.y > canvas.height - this.snakeBox) this.y = canvas.height - this.snakeBox;
            ctx.fillStyle = `rgb(0,0,0)`
            ctx.fillRect(this.x, this.y, this.snakeBox, this.snakeBox);

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

            // switch (x) {
            //       case (1): {
            //             this.xspeed = 20;
            //             this.yspeed = 0;
            //             break;
            //       }
            //       case (-1): {
            //             this.xspeed = -20;
            //             this.yspeed = 0;
            //             break;
            //       }
            //       case 0: {
            //             switch (y) {
            //                   case (1): {
            //                         this.yspeed = 20;
            //                         this.xspeed = 0;
            //                         break;
            //                   }
            //                   case (-1): {
            //                         this.yspeed = -20;
            //                         this.xspeed = 0;
            //                         break;
            //                   }
            //             }
            //             break;
            //       }
            // }

      }

}