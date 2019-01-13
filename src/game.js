import Bomb from "./bomb";
import Player from './player';

var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1400;
  canvas.height = 1200;

class Game {
    constructor(options) {
        this.options = options;
        this.score = 0;
        this.gameOver = false;
        this.bombs = [];
        this.highestScore = parseInt(localStorage.getItem("highScore"));
        this.ctx = canvas.getContext("2d");

        this.animate();
        // this.detectKeyPress();
    }

    animate() {
        if (this.bombs.length < 15) {
            this.addBombs();
        }

        this.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }

    addBombs() {
        this.bombs.push(new Bomb({
            context: canvas.getContext("2d"),
            width: 1704,    //width of the photo
            height: 1200,   //height here doesnt matter
            numberOfFrames: 8, //num of frames of the photo
            moveDown: 0
        }));
      }
      drawBombs(ctx) {
        this.bombs.forEach(bomb => {
            bomb.update();
          bomb.drawStationary(ctx);
        });
      }
      draw(ctx) {
        this.drawBombs(ctx);
      }
}

export default Game;