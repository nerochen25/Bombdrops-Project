import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bombdropsAnimation");

  const ctx = canvas.getContext("2d"); 

  let beforeGame = document.getElementById('before_game');
  
  let startGameBtn = document.getElementById('start_game_btn');

  let gameDataDiv = document.getElementById('game_data_div');
  gameDataDiv.style.display = "none";

  let gameBegin = document.getElementById('game_begin');
  gameBegin.style.display = 'none';

  // let gameMusic = document.getElementById('game_music');

  startGameBtn.addEventListener('click', function() {
    let game = new Game(ctx)
    window.setTimeout(game.gameLoop, 20000);
    // gameMusic.play();
    
    gameBegin.style.display = "flex";
    beforeGame.style.display = "none";
    gameDataDiv.style.display = "flex";
  });
});