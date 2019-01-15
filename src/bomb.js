import mathProblemGenerator from './math_problem_generator';
import mathProblemSolver from './math_problem_solver';


var bombImage = new Image();
bombImage.src = '../image_resource/bomb_sprite_sheet.png';

var explosionImage = new Image();
explosionImage.src = '../image_resource/Bombdrops.png';

var speed = 0;

function speedController() {
    speedMeteor.innerHTML = `Speed: ${speed}`
    return speed += 0.01; //put gravity formula here, PreResult + 0.1 * loopCount
}

var speedControllerBtn = document.getElementById('speed_controller_btn')
speedControllerBtn.addEventListener('click', speedController)

var speedMeteor = document.getElementById('speed_meteor');
speedMeteor.innerHTML = 'Speed : 0';


// const fallingPos = document.getElementById('falling_position')
// const missedBomb = document.getElementById('missed_bomb')
// missedBomb.innerHTML = `Missed: ${this.missed}`;


class Bomb {
    constructor(options) {
        this.speed = 5;
        this.missed = 0;
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
        this.explosionImage = explosionImage;
        this.mathProblem = String(mathProblemGenerator(1,20));
        this.mathSolution = mathProblemSolver(this.mathProblem)

        // fallingPos.innerHTML = `Postion: ${this.moveRight}`;
        // missedBomb.innerHTML = `Missed: ${this.missed}`;

    };
    
    update() {
        this.tickCount += 1; 
        
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            // Go to the next frame
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1; //frequency of frames                
                this.moveDown += this.speed; //speed of falling   

                if (this.moveDown >= 1500) {  
                    this.missed += 1;
                    this.moveDown = this.speed;
                    this.moveRight = Math.random() * 1000 // randmize each bomb's falling position
                    this.mathProblem = String(mathProblemGenerator(1,20));
                    this.mathSolution = mathProblemSolver(this.mathProblem)
                } 
            } else {
                this.context.clearRect(0,0, this.width, this.height);
                this.frameIndex = 0;
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
        
        this.context.fillText(this.mathProblem, this.moveRight + 60, this.moveDown + 120);
        this.context.fillStyle = 'white';
        this.context.font = '17px Coiny';
    };
}

export default Bomb;
