window.onload = function() {
  var bombImage = new Image();
  bombImage.src = '../image_resource/bomb_sprite_sheet.png';

  var speed = 0;

  function sprite (options) {
                  
      var that = {},
          frameIndex = 0,
          tickCount = 0,
          ticksPerFrame = options.ticksPerFrame || 0,
          numberOfFrames = options.numberOfFrames || 1,
          moveDown = speedController();
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
                  frameIndex += 1; //frequency of frames
                  moveDown += speed; //speed of falling
                  // moveRight += 10; //speed of shifting to right
                  if (moveDown === 1600) {
                      moveDown = 0;
                    //   moveRight += 400;
                    //   if (moveRight === 10000) {
                    //       moveRight = 0;
                    //   }
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
              0, //sy, bomb shifts up and gets cut
              that.width / numberOfFrames, //sWidth
              that.height, //sHeight, sqeeze the image shorter
              moveRight, //dx, move bomb to right by increasing this
              moveDown, //dy, move bomb downward by increasing this
              that.width / numberOfFrames - 100, //dWidth, width size of the image
              that.height - 500); //dHeight, height size of the image
    };
    that.render1 = function () {
        that.context.clearRect(0,0, that.width, that.height);

        that.context.drawImage(
            that.image, //image
            frameIndex * that.width / numberOfFrames, //sx
            0, //sy, bomb shifts up and gets cut
            that.width / numberOfFrames, //sWidth
            that.height, //sHeight, sqeeze the image shorter
            moveRight, //dx, move bomb to right by increasing this
            moveDown, //dy, move bomb downward by increasing this
            that.width / numberOfFrames - 100, //dWidth, width size of the image
            that.height - 500); //dHeight, height size of the image
        };

      return that;
  }

  function speedController() {
    return speed += 1;
  }

  const button = document.getElementById('speed_controller_btn')
  button.addEventListener('click', speedController)
 
  var canvas = document.getElementById("bombdropsAnimation");
  canvas.width = 1000;
  canvas.height = 1000;
  var bomb = new sprite({
      context: canvas.getContext("2d"),
      width: 1704,    //width of the photo
      height: 1000,   //height here doesnt matter
      image: bombImage,
      numberOfFrames: 8, //num of frames of the photo
      moveDown: 0,
      moveRight: 200
  });
  

  function gameLoop () {
    bomb.update();
    bomb.render();
    window.requestAnimationFrame(gameLoop);
  }

  bombImage.addEventListener("load", gameLoop);

}

