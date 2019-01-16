import Bomb from "./bomb";
import Player from './player';
import sortedScoreBoard from './sorted_score_board';

var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1400;
  canvas.height = 1200; 
  
var speedMeteor = document.getElementById('speed_meteor');

var playerScore = document.getElementById('player_score');
playerScore.innerHTML = '👑 SCORE: 0'

var missedBombs = document.getElementById('missed_bomb')
missedBombs.innerHTML = 'Missed: 0';

var beginGame = document.getElementById('game_begin');
var gameDataDiv = document.getElementById('game_data_div');
var gameOverDiv = document.getElementById('game_over_div');
let body = document.getElementById('body');

let playerNameInput = document.getElementById('player_name_input');
let myScore = document.getElementById('my_score');


class Game {
    constructor(options) {
        this.totalMissed = 0;
        this.speed = 1;
        this.totalBombs = 0;
        this.playerName = null; 
        this.playerScore = 0;
        this.missed = 0;
        this.userSolution = '';
        this.gameOver = false;
        this.bombs = [];
        this.highestScore = parseInt(localStorage.getItem("highScore"));
        this.ctx = canvas.getContext("2d");
        this.gameLoop();  
        this.avoidTwice = false;
    }


    gameLoop() {
        if (this.playerName === null) {
            let player = new Player ({
                  name: playerNameInput.value
                })
            this.playerName = player.name;
        }
        if (this.gameOver === false) {
            if (this.bombs.length != 2) {
                this.addBombs();
            }
            this.draw(this.context)
            this.removeBomb();
            this.countMissedBomb();
            missedBombs.innerHTML = `💣 Missed: ${Math.round(this.totalMissed * this.speed)}`; //still a bit off
            this.endGame(Math.round(this.totalMissed) * this.speed);
            requestAnimationFrame(this.gameLoop.bind(this)); 
        } else if (this.gameOver === true) {
            window.localStorage.setItem(this.playerName, this.playerScore)
            canvas.style.display = "none";
            body.style.backgroundColor = "white";
            beginGame.style.display = "none";
            gameDataDiv.style.display = "none";
            gameOverDiv.style.display = "block";
            myScore.innerHTML = `${this.playerName}:   ${this.playerScore}`;
            
            if (this.avoidTwice === false ) {
                this.avoidTwice = true;
                let sortedLocalStorage = sortedScoreBoard(window.localStorage).reverse();
                let names = Object.keys(sortedLocalStorage);
                let scores = Object.values(sortedLocalStorage);
                
                for (let i = 0; i < 10; i++) {
                    if (names[i] === undefined) {
                        names[i] = '';
                    }
                    if (scores[i] === undefined) {
                        scores[i] = '';
                    }

                    var scoreOrderList = document.getElementById("score_list");
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(`${names[i]}${'     '}${scores[i]}`));
                    scoreOrderList.appendChild(li);   
                } 
            }
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
            speedMeteor.innerHTML = `🚀 SPEED: ${this.speed}`;
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
                        playerScore.innerHTML = `👑 SCORE: ${this.playerScore}`
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
                this.missed += 1;
            }
        })
        this.missed = this.missed / 229;
        this.totalMissed += this.missed;
    }
}

export default Game;