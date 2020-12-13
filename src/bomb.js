import mathProblemGenerator from './math_problem_generator';
import mathProblemSolver from './math_problem_solver';

var bombImage = new Image();
bombImage.src = './image_resource/bomb_sprite_sheet.png';

var explosionImage = new Image();
explosionImage.src = './image_resource/Bombdrops.png';

var speed = 1.5;

function increaseSpeed() {
    if (speed < 3.5) {
        speedMeteor.innerHTML = `🚀 SPEED: ${speed}`
        return speed += 0.25; 
    }
}

function reduceSpeed() {
    if (speed > 1) {
        speedMeteor.innerHTML = `🚀 SPEED: ${speed}`
        return speed -= 0.25;
    }
}

var increaseSpeedBtn = document.getElementById('increase_speed_btn')
increaseSpeedBtn.addEventListener('click', increaseSpeed)

var reducerSpeedBtn = document.getElementById('reduce_speed_btn')
reducerSpeedBtn.addEventListener('click', reduceSpeed)

var speedMeteor = document.getElementById('speed_meteor');
speedMeteor.innerHTML = `SPEED: ${speed}`;


let missedBombs = 0;

class Bomb {
    constructor(options) {
        this.speed = 1.5;
        this.missed = 0;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.tickPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;
        this.moveDown = 0; //falling from the top but randomizing moveDown later to make a raining bomb view
        this.moveRight = Math.random() * (window.innerWidth - 300);  
        this.context = options.context;
        this.width = options.width;
        this.height = options.height;
        this.image = bombImage;
        this.explosionImage = explosionImage;
        this.mathProblem = String(mathProblemGenerator(1,20));
        this.mathSolution = mathProblemSolver(this.mathProblem);
    };
    
    update() {
        this.tickCount += 1; 
        
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            // Go to the next frame
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1; //frequency of frames                
                this.moveDown += speed; //speed of falling   
                this.speed = speed;
                this.context.clearRect(0,0, this.width, this.height);
                
                if (this.moveDown >= this.height) {  
                    this.missed += 1;
                    missedBombs += 1;
                    this.moveDown = this.speed;
                    let windowWidth = window.innerWidth;
                    this.moveRight = Math.random() * (windowWidth - windowWidth * 0.20); // randmize each bomb's falling position
                    this.mathProblem = String(mathProblemGenerator(1,20));
                    this.mathSolution = mathProblemSolver(this.mathProblem);
                } 
            } else {
                this.context.clearRect(0,0, this.width, this.height);
                this.frameIndex = 0;
            }
        }
    }

    render() {
        this.context.drawImage(
            this.image, //image
            this.frameIndex * this.width / this.numberOfFrames, //sx
            0, //sy, bomb shifts up and gets cut
            this.width / this.numberOfFrames, //sWidth
            this.height, //sHeight, sqeeze the image shorter
            this.moveRight + 150, //dx, move bomb to right by increasing this
            this.moveDown, //dy, move bomb downward by increasing this
            this.width / this.numberOfFrames - 340, //dWidth, width size of the image
            this.height - 580 //dHeight, height size of the image
        );
        
        this.context.fillText(this.mathProblem, this.moveRight + 46, this.moveDown + 120);
        this.context.fillStyle = 'white';
        this.context.font = '21px Coiny';
    };

    getFrameWidth() {
        return this.width / this.numberOfFrames;
    }
}

export default Bomb;
