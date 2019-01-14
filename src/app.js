import Game from "./game";
console.log('inside app.js')

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bombdropsAnimation");
  const ctx = canvas.getContext("2d");
  ctx.fillText("Hello World!", 10, 50);

  let game = new Game(ctx);
  game.gameLoop();
});