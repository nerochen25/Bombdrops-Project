import mathProblemGenerator from './mathProblemGenerater';

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
        this.missedBomb = 0;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.tickPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;
        this.moveDown = 0; //falling from the top but randomizing moveDown later to make a raining bomb view
        this.moveRight = Math.random() * 1000;  
        this.context = options.context;
        this.width = options.width;
        this.height = options.height;
        this.image = bombImage;
        this.mathProblem = mathProblemGenerator();

        fallingPos.innerHTML = `Postion: ${this.moveRight}`;
        missedBomb.innerHTML = `Missed: ${this.missedBomb}`;
        startPos.innerHTML = `Start Falling Point: ${this.moveDown}`;
    };

    // drawStationary(context) {
    //     context.drawImage(
    //         this.image,
    //         this.frameIndex * this.width / this.numberOfFrames, //sx
    //         0, //sy, bomb shifts up and gets cut
    //         this.width / this.numberOfFrames, //sWidth
    //         this.height, //sHeight, sqeeze the image shorter
    //         this.moveRight + 150 , //dx, move bomb to right by increasing this
    //         this.moveDown, //dy, move bomb downward by increasing this
    //         this.width / this.numberOfFrames - 320, //dWidth, width size of the image
    //         this.height - 600 //dHeight, height size of the image
    //     );
    //   }
    
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
                    this.missedBomb += 1;
                    this.moveRight = Math.random() * 1000 // randmize each bomb's falling position
                    //keep updating the data of moveRight, missedBomb and moveDown
                    fallingPos.innerHTML = `Postion: ${this.moveRight}`;
                    missedBomb.innerHTML = `Missed: ${this.missedBomb}`;
                    startPos.innerHTML = `Start Falling Point: ${this.moveDown}`;


                } 
            } else {
                this.context.clearRect(0,0, this.width, this.height);
                this.frameIndex = 1;
            }
            
        }
    };

    render() {
        this.context.drawImage(
            this.image, //image
            this.frameIndex * this.width / this.numberOfFrames, //sx
            0, //sy, bomb shifts up and gets cut
            this.width / this.numberOfFrames, //sWidth
            this.height, //sHeight, sqeeze the image shorter
            this.moveRight + 150, //dx, move bomb to right by increasing this
            this.moveDown, //dy, move bomb downward by increasing this
            this.width / this.numberOfFrames - 320, //dWidth, width size of the image
            this.height - 600 //dHeight, height size of the image
        );
        
        //sub first arg of fillText with this.mathProblem later
        this.context.fillText(this.mathProblem, this.moveRight + 60, this.moveDown + 120);
        this.context.fillStyle = 'white';
        this.context.font = '18px Coiny';
    };
}

export default Bomb;
