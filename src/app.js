import Game from "./game";
console.log('inside app.js')

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bombdropsAnimation");
  const ctx = canvas.getContext("2d");

  let game = new Game(ctx);
  console.log('inside app.js')
  game.animate();
});