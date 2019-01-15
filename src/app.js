import Game from "./game";
import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bombdropsAnimation");
  const ctx = canvas.getContext("2d"); 

  let beforeGame = document.getElementById('before_game');
  
  let startGameBtn = document.getElementById('start_game_btn');

  let gameDataDiv = document.getElementById('game_data_div');
  gameDataDiv.style.display = "none";

  let gameBegin = document.getElementById('game_begin')
  gameBegin.style.display = 'none';

  let playerNameInput = document.getElementById('player_name_input');

  let playerScore = document.getElementById('player_score');

  startGameBtn.addEventListener('click', function() {
    let player = new Player ({
      name: playerNameInput.value,
      score: playerScore.innerHTML
    })
    console.log(player)
    let game = new Game(ctx)
    game.gameLoop();
    

    gameBegin.style.display = "block";
    beforeGame.style.display = "none";
    gameDataDiv.style.display = "block";
  })
});