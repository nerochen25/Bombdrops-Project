import Bomb from "./bomb";
import Player from './player';

var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1400;
  canvas.height = 1200; 
  
var speedMeteor = document.getElementById('speed_meteor');
// speedMeteor.innerHTML = 'SPEED: 1';

var missedBomb = document.getElementById('missed_bomb');

var playerScore = document.getElementById('player_score');
playerScore.innerHTML = 'SCORE: 0'

var missedBombs = document.getElementById('missed_bomb')
// missedBombs.innerHTML = 'Missed: 0';

var playerName = document.getElementById('player_name');

class Game {
    constructor(options) {
        this.speed = 1;
        this.totalBombs = 0;
        this.playerName = ''; 
        this.playerScore = 0;
        this.missed = 0;
        this.userSolution = '';
        this.gameOver = false;
        this.bombs = [];
        this.highestScore = parseInt(localStorage.getItem("highScore"));
        this.ctx = canvas.getContext("2d");
        this.gameLoop();        
    }


    gameLoop() {
        if (this.gameOver === false) {
            if (this.bombs.length != 4) {
                this.addBombs();
            }
            this.draw(this.context)
            this.removeBomb();
            requestAnimationFrame(this.gameLoop.bind(this)); 
        } else {
            //Game over messgae based on missed bombs
        }
    }


    addBombs() {
        
        this.bombs.push(new Bomb({
            context: this.ctx,
            width: 1704,    //width of the photo
            height: 1200,   //height here doesnt matter
            numberOfFrames: 8, //num of frames of the photo
            moveDown: 0,
            speed: 1,
        }));      
    }

    drawBombs() {
        this.bombs.forEach(bomb => {
            bomb.update();
            bomb.render();
            this.speed = bomb.speed;
            speedMeteor.innerHTML = `SPEED: ${this.speed}`;
        });
        
    }

    draw(ctx) {
        this.drawBombs(ctx);
    }

    removeBomb() {
        let userSolutionInput = document.getElementById('solution_input');
        userSolutionInput.addEventListener('keypress', (e) => {
            var key = e.which || e.keyCode;
            if (key === 13) {
                this.userSolution = document.getElementById('solution_input').value;
                document.getElementById('solution_input').value = ''
                
                this.bombs.forEach ((bomb, idx) => {
                    if (parseInt(bomb.mathSolution) === parseInt(this.userSolution)) {
                        bomb.image = bomb.explosionImage;
                        bomb.context.font = "100px, Arial"
                        bomb.context.fillText('💥💥💥💥', bomb.moveRight + 60, bomb.moveDown + 120);
                        this.playerScore += 1000 * this.speed;
                        playerScore.innerHTML = `SCORE: ${this.playerScore}`
                        this.bombs.splice(idx,1)
                        // setInterval(() => { this.bombs.splice(idx,1)
                        // }, 100);
                    }
                })
                
            }
        })
    }

}

export default Game;