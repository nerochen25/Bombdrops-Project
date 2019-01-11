
window.onload = function() {
  // var canvas = document.getElementById('canvas'); 
  // var context = canvas.getContext('2d');
  // var backGroundImage = new Image();

  // backGroundImage.onload = function() {
  //     context.drawImage(backGroundImage, 0, 0, 1900, 930);
  // };

  // backGroundImage.src = './image_resource/City_Landscape_Background.jpg';
  var coinImage = new Image();
  coinImage.src = '../image_resource/bomb_sprite_sheet.png';

  function sprite (options) {
                  
      var that = {},
          frameIndex = 0,
          tickCount = 0,
          ticksPerFrame = options.ticksPerFrame || 0,
          numberOfFrames = options.numberOfFrames || 1,
          moveDown = options.moveDown || 0;
          moveRight = options.moveRight || 0;

                      
      that.context = options.context;
      that.width = options.width;
      that.height = options.height;
      that.image = options.image;
      that.loop = options.loop;

      that.update = function () {
          tickCount += 1; 
          
          if (tickCount > ticksPerFrame) {
              tickCount = 0;
              // Go to the next frame
              if (frameIndex < numberOfFrames - 1) {
                  frameIndex += 1; //speed of spinning
                  moveDown += 1; //speed of falling
                  // moveRight += 10; //speed of shifting to right
                  if (moveDown === 1600) {

                      moveDown = 0;
                  }
                  if (moveRight === 400) {
                      moveRight = 0;
                  }
              } else {
                  frameIndex = 0;
              }
          }
      };

      that.render = function () {
          that.context.clearRect(0,0, that.width, that.height);

          that.context.drawImage(
              that.image, //image
              frameIndex * that.width / numberOfFrames, //sx
              0, //sy, coin shifts up and gets cut
              that.width / numberOfFrames, //sWidth
              that.height, //sHeight, sqeeze the image shorter
              moveRight, //dx, move coin to right by increasing this
              moveDown, //dy, move coin downward by increasing this
              that.width / numberOfFrames - 100, //dWidth, width size of the image
              that.height - 500); //dHeight, height size of the image
          };

      return that;
  }
 
  var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1000;
  canvas.height = 1000;
  var coin = new sprite({
      context: canvas.getContext("2d"),
      width: 1704,    //width of the photo
      height: 1000,   //height here doesnt matter
      image: coinImage,
      numberOfFrames: 8, //num of frames of the photo
      moveDown: 0,
      moveRight: 200
  });

  function gameLoop () {
      coin.update();
      coin.render();
      window.requestAnimationFrame(gameLoop);
  }
 
  coinImage.addEventListener("load", gameLoop);
}