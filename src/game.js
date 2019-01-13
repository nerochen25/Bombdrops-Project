import Bomb from "./bomb";
import Player from './player';

class Game {
    constructor(options) {
        this.options = options;
        this.score = 0;
        this.gameOver = false;
        this.bombs = [];
        this.highestScore = parseInt(localStorage.getItem("highScore"));

        this.animate();
        this.detectKeyPress();
    }

    animate() {
        if (this.bombs.length < 10) {
            this.bombs.push(new Bomb({
                context: canvas.getContext("2d"),
                width: 1704,    //width of the photo
                height: 1200,   //height here doesnt matter
                numberOfFrames: 8, //num of frames of the photo
                moveDown: 0,
            }));
        }

        requestAnimationFrame(this.animate.bind(this));
      }

}

export default Game;