// import Bomb from './bomb';
// import Game from './game';
// console.log('inside index');

// window.onload = function() {
//   var bombImage = new Image();
//   bombImage.src = '../image_resource/bomb_sprite_sheet.png';

//   var speed = 0;

//   function speedController() {
//     speedMeteor.innerHTML = `Speed: ${speed}`
//     return speed += 0.03; //put gravity formula here, PreResult + 0.1 * loopCount
//   }

//   const speedControllerBtn = document.getElementById('increase_speed_btn')
//   speedControllerBtn.addEventListener('click', speedController)
//   const speedMeteor = document.getElementById('speed_meteor')
//   speedMeteor.innerHTML = `Speed: ${speed}`

 
//   var canvas = document.getElementById("bombdropsAnimation");
//   canvas.width = 1400;
//   canvas.height = 1200;
//   var bomb = new Bomb({
//       context: canvas.getContext("2d"),
//       width: 1704,    //width of the photo
//       height: 1200,   //height here doesnt matter
//     //   image: bombImage,
//       numberOfFrames: 8, //num of frames of the photo
//       moveDown: 0,
//     //   moveRight: 200
//   });
//   var bomb1 = new Bomb({
//     context: canvas.getContext("2d"),
//     width: 1704,    //width of the photo
//     height: 1200,   //height here doesnt matter
//   //   image: bombImage,
//     numberOfFrames: 8, //num of frames of the photo
//     moveDown: 0,
//   //   moveRight: 200
//   });

//   var bombArr = [bomb, bomb1];

//   var newGame = new Game({
//     bombs: bombArr
//   })

//   // function gameLoop () {
//   //     bomb.update();
//   //     bomb.render();
//   //   window.requestAnimationFrame(gameLoop);
//   // }
//   // bombImage.addEventListener("load", gameLoop)


//   newGame.bombs.forEach(bomb => {
//     function gameLoop() {
//       bomb.update();
//       bomb.render();
//       window.requestAnimationFrame(gameLoop);
//     }
//     bombImage.addEventListener("load", gameLoop)
//   })
  


// }
