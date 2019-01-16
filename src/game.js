import Bomb from "./bomb";
import Player from './player';

var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1400;
  canvas.height = 1200; 
  
var speedMeteor = document.getElementById('speed_meteor');
// speedMeteor.innerHTML = 'SPEED: 1';

var playerScore = document.getElementById('player_score');
playerScore.innerHTML = 'SCORE: 0'

var missedBombs = document.getElementById('missed_bomb')
missedBombs.innerHTML = 'Missed: 0';

var beginGame = document.getElementById('game_begin');
var gameDataDiv = document.getElementById('game_data_div');
var gameOverDiv = document.getElementById('game_over_div');
let playerNameInput = document.getElementById('player_name_input');
let player = new Player ({
    name: playerNameInput.value
  })




class Game {
    constructor(options) {
        this.totalMissed = 0;
        this.speed = 1;
        this.totalBombs = 0;
        this.playerName = player.name; 
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
            if (this.bombs.length != 2) {
                this.addBombs();
            }
            this.draw(this.context)
            this.removeBomb();
            this.countMissedBomb();
            missedBombs.innerHTML = `Missed ${Math.round(this.totalMissed * this.speed)}`; //still a bit off
            this.endGame(Math.round(this.totalMissed) * this.speed);
            requestAnimationFrame(this.gameLoop.bind(this)); 
        } else {
            beginGame.style.display = "none";
            gameDataDiv.style.display = "none";
            gameOverDiv.style.display = "block";
            gameOverDiv.innerText = `${this.playerName}: ${this.playerScore}`
        }
    }

    endGame(nummOfMissedBomb) {
        if (nummOfMissedBomb >= 4) {
            this.gameOver = true
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

    countMissedBomb() {
        this.bombs.forEach((bomb) => {
            if (bomb.moveDown >= 1300) {
                //each missed counts 229
                this.missed += 1;
            }
        })
        this.missed = this.missed / 229; //1.000
        this.totalMissed += this.missed;
        // console.log(this.totalMissed)
    }
}

export default Game;