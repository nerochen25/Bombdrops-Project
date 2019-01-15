import Bomb from "./bomb";
import Player from './player';

var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1400;
  canvas.height = 1030; 
  
// function renderGamePage() {
//     var startGameDiv = document.getElementById("start_game_div");
//     startGameDiv.style.display = 'none';
//     if (startGameDiv.style.display === "none") {
//       startGameDiv.style.display = "block";
//     } else {
//       startGameDiv.style.display = "none";
//     }
//   }

class Game {
    constructor(options) {
        this.playerName = null; 
        this.playerScore = 0;
        this.userSolution = '';
        this.gameOver = false;
        this.bombs = [];
        this.highestScore = parseInt(localStorage.getItem("highScore"));
        this.ctx = canvas.getContext("2d");
        this.gameLoop();        
        // this.detectKeyPress();
    }


    gameLoop() {
        // if (this.player === null) {
        //     this.addPlayer();
        // }
        if (this.bombs.length != 5) {
            this.addBombs();
        }
        this.draw(this.context)
        this.removeBomb();
        // 1/30 sec per loop
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // addPlayer() {
    
    // }

    addBombs() {
        
        this.bombs.push(new Bomb({
            context: this.ctx,
            width: 1704,    //width of the photo
            height: 1100,   //height here doesnt matter
            numberOfFrames: 8, //num of frames of the photo
            moveDown: 0
        }));        
    }

    drawBombs() {
        this.bombs.forEach(bomb => {
            bomb.update();
            bomb.render();
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
                // for (let i = 0; i < this.bombs.length; i++) {
                //     if (parseInt(bomb.mathSolution) === parseInt(this.userSolution)) {
                //         this.bombs.splice(idx,1)
                //     }
                // }
                this.bombs.forEach ((bomb, idx) => {
                    if (parseInt(bomb.mathSolution) === parseInt(this.userSolution)) {
                        console.log(bomb.mathSolution)
                        console.log(this.userSolution)
                        this.bombs.splice(idx,1)
                        console.log(this.bombs.length);
                        
                    }
                })
                
            }
        })
    }

}

export default Game;