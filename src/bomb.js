// var bomb = new Bomb({
//     context: canvas.getContext("2d"),
//     width: 1704,    //width of the photo
//     height: 1200,   //height here doesnt matter
//     numberOfFrames: 8, //num of frames of the photo
//     moveDown: 0,
//     moveRight: 200
// });

var bombImage = new Image();
bombImage.src = '../image_resource/bomb_sprite_sheet.png';
var speed = 0;
function speedController() {
    speedMeteor.innerHTML = `Speed: ${speed}`
    return speed += 0.05; //put gravity formula here, PreResult + 0.1 * loopCount
}
const speedControllerBtn = document.getElementById('speed_controller_btn')
speedControllerBtn.addEventListener('click', speedController)
const speedMeteor = document.getElementById('speed_meteor')
speedMeteor.innerHTML = `Speed: ${speed}`
const fallingPos = document.getElementById('falling_position')
const missedBomb = document.getElementById('missed_bomb')



class Bomb {
    constructor(options) {
        console.log('inside bomb class');
        this.missedBomb = 0;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.tickPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;
        this.moveDown = options.moveDown || 0;
        this.moveRight = Math.random() * 1000;
        fallingPos.innerHTML = `Postion: ${this.moveRight}`;
        missedBomb.innerHTML = `Missed: ${this.missedBomb}`;



                      
        this.context = options.context;
        this.width = options.width;
        this.height = options.height;
        this.image = bombImage;
        // this.loop = options.loop;
    };
    
    update() {
        this.tickCount += 1; 
        
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            // Go to the next frame
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1; //frequency of frames
                this.moveDown += speedController(); //speed of falling                  
                // moveRight += 10; //speed of shifting to right
                if (this.moveDown >= 1200) {                      
                    this.moveDown = speed;
                    speed = 0
                    this.moveRight = Math.random() * 1000;
                    this.missedBomb += 1;
                    fallingPos.innerHTML = `Postion: ${this.moveRight}`
                    missedBomb.innerHTML = `Missed: ${this.missedBomb}`;

                } 
            } else {
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
            this.height - 500); //dHeight, height size of the image
    };
}

export default Bomb;
