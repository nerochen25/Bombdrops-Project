import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bombdropsAnimation");
  const ctx = canvas.getContext("2d");
  let game = new Game(ctx);  
  game.gameLoop();
});