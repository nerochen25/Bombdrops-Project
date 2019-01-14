/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconsole.log('inside app.js')\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"bombdropsAnimation\");\n  const ctx = canvas.getContext(\"2d\");\n  ctx.fillText(\"Hello World!\", 10, 50);\n\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.gameLoop();\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/bomb.js":
/*!*********************!*\
  !*** ./src/bomb.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mathProblemGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemGenerator */ \"./src/mathProblemGenerator.js\");\n/* harmony import */ var _mathProblemSolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblemSolver */ \"./src/mathProblemSolver.js\");\n\n\n\n\nvar bombImage = new Image();\nbombImage.src = '../image_resource/bomb_sprite_sheet.png';\n\nvar speed = 0;\n\nfunction speedController() {\n    speedMeteor.innerHTML = `Speed: ${speed}`\n    return speed += 0.01; //put gravity formula here, PreResult + 0.1 * loopCount\n}\n\nconst speedControllerBtn = document.getElementById('speed_controller_btn')\nspeedControllerBtn.addEventListener('click', speedController)\n\nconst speedMeteor = document.getElementById('speed_meteor');\nspeedMeteor.innerHTML = `Speed: ${speed}`;\n\n\nconst fallingPos = document.getElementById('falling_position')\nconst missedBomb = document.getElementById('missed_bomb')\nconst startPos = document.getElementById('start_position')\n\n\nclass Bomb {\n    constructor(options) {\n        this.missedBomb = 0;\n        this.frameIndex = 0;\n        this.tickCount = 0;\n        this.ticksPerFrame = options.tickPerFrame || 0;\n        this.numberOfFrames = options.numberOfFrames || 1;\n        this.moveDown = 0; //falling from the top but randomizing moveDown later to make a raining bomb view\n        this.moveRight = Math.random() * 1000;  \n        this.context = options.context;\n        this.width = options.width;\n        this.height = options.height;\n        this.image = bombImage;\n        this.mathProblem = String(Object(_mathProblemGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,20));\n        this.mathSolution = Object(_mathProblemSolver__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.mathProblem)\n        console.log(this.mathProblem);\n        console.log(Object(_mathProblemSolver__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.mathProblem));\n        console.log(document.getElementById(\"solution_input\").value);\n\n\n\n        fallingPos.innerHTML = `Postion: ${this.moveRight}`;\n        missedBomb.innerHTML = `Missed: ${this.missedBomb}`;\n        startPos.innerHTML = `Start Falling Point: ${this.moveDown}`;\n    };\n\n    // drawStationary(context) {\n    //     context.drawImage(\n    //         this.image,\n    //         this.frameIndex * this.width / this.numberOfFrames, //sx\n    //         0, //sy, bomb shifts up and gets cut\n    //         this.width / this.numberOfFrames, //sWidth\n    //         this.height, //sHeight, sqeeze the image shorter\n    //         this.moveRight + 150 , //dx, move bomb to right by increasing this\n    //         this.moveDown, //dy, move bomb downward by increasing this\n    //         this.width / this.numberOfFrames - 320, //dWidth, width size of the image\n    //         this.height - 600 //dHeight, height size of the image\n    //     );\n    //   }\n    \n    update() {\n        this.tickCount += 1; \n        \n        if (this.tickCount > this.ticksPerFrame) {\n            this.tickCount = 0;\n\n            // Go to the next frame\n            if (this.frameIndex < this.numberOfFrames - 1) {\n                this.frameIndex += 1; //frequency of frames\n                this.moveDown += speedController(); //speed of falling                  \n                // this.moveRight -= 1; //speed of shifting to left\n                console.log(document.getElementById(\"solution_input\").value);\n\n                if (this.moveDown >= 1200) {                      \n                    this.moveDown = speed;\n                    speed = 0\n                    this.missedBomb += 1;\n                    this.moveRight = Math.random() * 1000 // randmize each bomb's falling position\n                    this.mathProblem = String(Object(_mathProblemGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,20));\n                    console.log(this.mathProblem);   \n                    console.log(Object(_mathProblemSolver__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.mathProblem));\n                    console.log(document.getElementById(\"solution_input\").value);\n                    document.getElementById(\"solution_input\").value = '';\n\n     \n                    //keep updating the data of moveRight, missedBomb and moveDown\n                    fallingPos.innerHTML = `Postion: ${this.moveRight}`;\n                    missedBomb.innerHTML = `Missed: ${this.missedBomb}`;\n                    startPos.innerHTML = `Start Falling Point: ${this.moveDown}`;\n\n\n                } \n            } else {\n                this.context.clearRect(0,0, this.width, this.height);\n                this.frameIndex = 1;\n            }\n            \n        }\n    };\n\n    render() {\n        this.context.drawImage(\n            this.image, //image\n            this.frameIndex * this.width / this.numberOfFrames, //sx\n            0, //sy, bomb shifts up and gets cut\n            this.width / this.numberOfFrames, //sWidth\n            this.height, //sHeight, sqeeze the image shorter\n            this.moveRight + 150, //dx, move bomb to right by increasing this\n            this.moveDown, //dy, move bomb downward by increasing this\n            this.width / this.numberOfFrames - 320, //dWidth, width size of the image\n            this.height - 600 //dHeight, height size of the image\n        );\n        \n        //sub first arg of fillText with this.mathProblem later\n        this.context.fillText(this.mathProblem, this.moveRight + 60, this.moveDown + 120);\n        this.context.fillStyle = 'white';\n        this.context.font = '18px Coiny';\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bomb);\n\n\n//# sourceURL=webpack:///./src/bomb.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bomb */ \"./src/bomb.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar canvas = document.getElementById(\"bombdropsAnimation\");\n  canvas.width = 1400;\n  canvas.height = 1200;  \n\nclass Game {\n    constructor(options) {\n        this.options = options;\n        this.score = 0;\n        this.gameOver = false;\n        this.bombs = [];\n        this.highestScore = parseInt(localStorage.getItem(\"highScore\"));\n        this.ctx = canvas.getContext(\"2d\");\n\n        this.gameLoop();\n        // this.detectKeyPress();\n    }\n\n    gameLoop() {\n        if (this.bombs.length < 1) {\n            this.addBombs();\n        }\n\n        this.draw(this.ctx);\n\n        requestAnimationFrame(this.gameLoop.bind(this));\n    }\n\n    addBombs() {\n        this.bombs.push(new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            context: canvas.getContext(\"2d\"),\n            width: 1704,    //width of the photo\n            height: 1200,   //height here doesnt matter\n            numberOfFrames: 8, //num of frames of the photo\n            moveDown: 0\n        }));\n    }\n\n    drawBombs(ctx) {\n        this.bombs.forEach(bomb => {\n            bomb.update();\n            bomb.render();\n        });\n    }\n\n    draw(ctx) {\n        this.drawBombs(ctx);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/mathProblemGenerator.js":
/*!*************************************!*\
  !*** ./src/mathProblemGenerator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst symbols = ['+', '-', '*', '/']\n\nfunction mathProblemGenerator(min , max) {\n\n    let int1 = Math.ceil(Math.random() * (max-min) + min) ;\n    let int2 = Math.ceil(Math.random() * (max-min) + min) ;\n    let symbol = symbols[Math.floor(Math.random()*symbols.length)];\n    let divider = Math.ceil(Math.random() * 10) + 1\n\n    if (symbol === '/') {\n        int1 = int2 * divider  ;\n        return `${int1} ${symbol} ${int2}`\n    }\n    \n    if (symbol === '-' && int1 < int2) {\n        return `${int2} ${symbol} ${int1}`\n    }\n\n    if (symbol === '*' && int1 > 10 && int2 > 10) {\n        int1 = int1 - 10\n    }\n\n    return `${int1} ${symbol} ${int2}`\n} \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mathProblemGenerator);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/mathProblemGenerator.js?");

/***/ }),

/***/ "./src/mathProblemSolver.js":
/*!**********************************!*\
  !*** ./src/mathProblemSolver.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mathProblemSolver(str) {\n    let mathElements = str.split(' ');\n    let int1 = parseInt(mathElements[0]);\n    let int2 = parseInt(mathElements[2]);\n    if (mathElements[1] === '+') {\n        return int1 + int2;\n    }\n\n    if (mathElements[1] === '-') {\n        return int1 - int2;\n    }\n\n    if (mathElements[1] === '*') {\n        return int1 * int2;\n    }\n\n    if (mathElements[1] === '/') {\n        return parseInt(int1 / int2);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mathProblemSolver);\n\n//# sourceURL=webpack:///./src/mathProblemSolver.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function playerNameInput() {\n//     document.getElementById('player_name')\n// }\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });