var bombImage = new Image();
bombImage.src = '../image_resource/bomb_sprite_sheet.png';
var speed = 0;
function speedController() {
    speedMeteor.innerHTML = `Speed: ${speed}`
    return speed += 0.001; //put gravity formula here, PreResult + 0.1 * loopCount
}
const speedControllerBtn = document.getElementById('speed_controller_btn')
speedControllerBtn.addEventListener('click', speedController)
const speedMeteor = document.getElementById('speed_meteor')
speedMeteor.innerHTML = `Speed: ${speed}`
const fallingPos = document.getElementById('falling_position')
const missedBomb = document.getElementById('missed_bomb')
const startPos = document.getElementById('start_position')




class Bomb {
    constructor(options) {
        console.log('inside bomb class');
        this.missedBomb = 0;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.tickPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;
        this.moveDown = Math.random() * 1200 || 0; //randomizing moveDown makes a raining bomb view
        this.moveRight = Math.random() * 1000;
        fallingPos.innerHTML = `Postion: ${this.moveRight}`;
        missedBomb.innerHTML = `Missed: ${this.missedBomb}`;
        startPos.innerHTML = `Start Falling Point: ${this.moveDown}`;

           
        this.context = options.context;
        this.width = options.width;
        this.height = options.height;
        this.image = bombImage;
        // this.loop = options.loop;
    };

    drawStationary(context) {
        context.drawImage(
            this.image, //image
            this.frameIndex * this.width / this.numberOfFrames, //sx
            0, //sy, bomb shifts up and gets cut
            this.width / this.numberOfFrames, //sWidth
            this.height, //sHeight, sqeeze the image shorter
            this.moveRight + 150 , //dx, move bomb to right by increasing this
            this.moveDown, //dy, move bomb downward by increasing this
            this.width / this.numberOfFrames - 320, //dWidth, width size of the image
            this.height - 600 //dHeight, height size of the image
        );
      }
    
    update() {
        this.tickCount += 1; 
        
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            // Go to the next frame
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1; //frequency of frames
                this.moveDown += speedController(); //speed of falling                  
                // this.moveRight -= 1; //speed of shifting to left
                
                if (this.moveDown >= 1200) {                      
                    this.moveDown = speed;
                    speed = 0
                    // this.moveRight = Math.random() * 1000;
                    this.missedBomb += 1;
                    
                    this.context.clearRect(0,0, this.width, this.height);
                    fallingPos.innerHTML = `Postion: ${this.moveRight}`;
                    missedBomb.innerHTML = `Missed: ${this.missedBomb}`;
                    startPos.innerHTML = `Start Falling Point: ${this.moveDown}`;


                } 
            } else {
                this.context.clearRect(0,0, this.width, this.height);
                this.frameIndex = 0;
            }
            
        }
    };

    render() {

        this.context.clearRect(0,0, this.width, this.height);

        this.context.drawImage(
            this.image, //image
            this.frameIndex * this.width / this.numberOfFrames, //sx
            0, //sy, bomb shifts up and gets cut
            this.width / this.numberOfFrames, //sWidth
            this.height, //sHeight, sqeeze the image shorter
            this.moveRight, //dx, move bomb to right by increasing this
            this.moveDown, //dy, move bomb downward by increasing this
            this.width / this.numberOfFrames - 100, //dWidth, width size of the image
            this.height - 400 //dHeight, height size of the image
        );
    };
}

export default Bomb;
