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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"bombdropsAnimation\");\n\n  const ctx = canvas.getContext(\"2d\"); \n\n  let beforeGame = document.getElementById('before_game');\n  \n  let startGameBtn = document.getElementById('start_game_btn');\n\n  let gameDataDiv = document.getElementById('game_data_div');\n  gameDataDiv.style.display = \"none\";\n\n  let gameBegin = document.getElementById('game_begin')\n  gameBegin.style.display = 'none';\n\n  startGameBtn.addEventListener('click', function() {\n    let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx)\n    game.gameLoop();\n    \n    gameBegin.style.display = \"block\";\n    beforeGame.style.display = \"none\";\n    gameDataDiv.style.display = \"block\";\n  })\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/bomb.js":
/*!*********************!*\
  !*** ./src/bomb.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_problem_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math_problem_generator */ \"./src/math_problem_generator.js\");\n/* harmony import */ var _math_problem_solver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math_problem_solver */ \"./src/math_problem_solver.js\");\n\n\n\nvar bombImage = new Image();\nbombImage.src = './image_resource/bomb_sprite_sheet.png';\n\nvar explosionImage = new Image();\nexplosionImage.src = './image_resource/Bombdrops.png';\n\nvar speed = 1;\n\nfunction increaseSpeed() {\n    speedMeteor.innerHTML = `🚀 SPEED: ${speed}`\n    return speed += 0.25; \n}\n\nfunction reduceSpeed() {\n    speedMeteor.innerHTML = `🚀 SPEED: ${speed}`\n    return speed -= 0.25;\n}\n\nvar increaseSpeedBtn = document.getElementById('increase_speed_btn')\nincreaseSpeedBtn.addEventListener('click', increaseSpeed)\n\nvar reducerSpeedBtn = document.getElementById('reduce_speed_btn')\nreducerSpeedBtn.addEventListener('click', reduceSpeed)\n\nvar speedMeteor = document.getElementById('speed_meteor');\nspeedMeteor.innerHTML = `SPEED: ${speed}`;\n\nclass Bomb {\n    constructor(options) {\n        this.speed = 1;\n        this.missed = 0;\n        this.frameIndex = 0;\n        this.tickCount = 0;\n        this.ticksPerFrame = options.tickPerFrame || 0;\n        this.numberOfFrames = options.numberOfFrames || 1;\n        this.moveDown = 0; //falling from the top but randomizing moveDown later to make a raining bomb view\n        this.moveRight = Math.random() * 1000;  \n        this.context = options.context;\n        this.width = options.width;\n        this.height = options.height;\n        this.image = bombImage;\n        this.explosionImage = explosionImage;\n        this.mathProblem = String(Object(_math_problem_generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,20));\n        this.mathSolution = Object(_math_problem_solver__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.mathProblem)\n    };\n    \n    update() {\n        this.tickCount += 1; \n        \n        if (this.tickCount > this.ticksPerFrame) {\n            this.tickCount = 0;\n\n            // Go to the next frame\n            if (this.frameIndex < this.numberOfFrames - 1) {\n                this.frameIndex += 1; //frequency of frames                \n                this.moveDown += speed; //speed of falling   \n                this.speed = speed\n                if (this.moveDown >= 1500) {  \n                    this.missed += 1;\n                    this.moveDown = this.speed;\n                    this.moveRight = Math.random() * 1000 // randmize each bomb's falling position\n                    this.mathProblem = String(Object(_math_problem_generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1,20));\n                    this.mathSolution = Object(_math_problem_solver__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.mathProblem)\n                } \n            } else {\n                this.context.clearRect(0,0, this.width, this.height);\n                this.frameIndex = 0;\n            }\n        }\n    };\n\n\n\n    render() {\n        this.context.drawImage(\n            this.image, //image\n            this.frameIndex * this.width / this.numberOfFrames, //sx\n            0, //sy, bomb shifts up and gets cut\n            this.width / this.numberOfFrames, //sWidth\n            this.height, //sHeight, sqeeze the image shorter\n            this.moveRight + 150, //dx, move bomb to right by increasing this\n            this.moveDown, //dy, move bomb downward by increasing this\n            this.width / this.numberOfFrames - 320, //dWidth, width size of the image\n            this.height - 600 //dHeight, height size of the image\n        );\n        \n        this.context.fillText(this.mathProblem, this.moveRight + 60, this.moveDown + 120);\n        this.context.fillStyle = 'white';\n        this.context.font = '17px Coiny';\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bomb);\n\n\n//# sourceURL=webpack:///./src/bomb.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bomb */ \"./src/bomb.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _sorted_score_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorted_score_board */ \"./src/sorted_score_board.js\");\n\n\n\n\nlet myStorage = window.localStorage;\n\nvar canvas = document.getElementById(\"bombdropsAnimation\");\n  canvas.width = 1400;\n  canvas.height = 1200; \n  \nvar speedMeteor = document.getElementById('speed_meteor');\n\nvar playerScore = document.getElementById('player_score');\nplayerScore.innerHTML = '👑 SCORE: 0'\n\nvar missedBombs = document.getElementById('missed_bomb')\nmissedBombs.innerHTML = 'Missed: 0';\n\nvar beginGame = document.getElementById('game_begin');\nvar gameDataDiv = document.getElementById('game_data_div');\nvar gameOverDiv = document.getElementById('game_over_div');\nlet body = document.getElementById('body');\n\nlet playerNameInput = document.getElementById('player_name_input');\nlet myScore = document.getElementById('my_score');\n\n\nclass Game {\n    constructor(options) {\n        this.totalMissed = 0;\n        this.speed = 1;\n        this.totalBombs = 0;\n        this.playerName = null; \n        this.playerScore = 0;\n        this.missed = 0;\n        this.userSolution = '';\n        this.gameOver = false;\n        this.bombs = [];\n        this.highestScore = parseInt(localStorage.getItem(\"highScore\"));\n        this.ctx = canvas.getContext(\"2d\");\n        this.gameLoop();  \n        this.avoidTwice = false;\n    }\n\n\n    gameLoop() {\n        if (this.playerName === null) {\n            let player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ({\n                  name: playerNameInput.value\n                })\n            this.playerName = player.name;\n        }\n        if (this.gameOver === false) {\n            if (this.bombs.length != 2) {\n                this.addBombs();\n            }\n            this.draw(this.context)\n            this.removeBomb();\n            this.countMissedBomb();\n            missedBombs.innerHTML = `💣 Missed: ${Math.round(this.totalMissed * this.speed)}`; //still a bit off\n            this.endGame(Math.round(this.totalMissed) * this.speed);\n            requestAnimationFrame(this.gameLoop.bind(this)); \n        } else if (this.gameOver === true) {\n            myStorage.setItem(this.playerName, this.playerScore)\n            canvas.style.display = \"none\";\n            body.style.backgroundColor = \"white\";\n            beginGame.style.display = \"none\";\n            gameDataDiv.style.display = \"none\";\n            gameOverDiv.style.display = \"block\";\n            myScore.innerHTML = `${this.playerName}:   ${this.playerScore}`;\n            \n            if (this.avoidTwice === false ) {\n                this.avoidTwice = true;\n                let sortedLocalStorage = Object(_sorted_score_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(myStorage)\n                let names = Object.keys(sortedLocalStorage);\n                let scores = Object.values(sortedLocalStorage);\n                \n                for (let i = 0; i < 10; i++) {\n                    if (names[i] === undefined) {\n                        names[i] = '';\n                    }\n                    if (scores[i] === undefined) {\n                        scores[i] = '';\n                    }\n\n                    var scoreOrderList = document.getElementById(\"score_list\");\n                    var li = document.createElement(\"li\");\n                    li.appendChild(document.createTextNode(`${names[i]}${'     '}${scores[i]}`));\n                    scoreOrderList.appendChild(li);   \n                } \n            }\n        }\n    }\n\n    endGame(nummOfMissedBomb) {\n        if (nummOfMissedBomb >= 4) {\n            this.gameOver = true\n        }\n    }\n\n\n    addBombs() {\n        \n        this.bombs.push(new _bomb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            context: this.ctx,\n            width: 1704,    //width of the photo\n            height: 1200,   //height here doesnt matter\n            numberOfFrames: 8, //num of frames of the photo\n            moveDown: 0,\n            speed: 1,\n        }));      \n    }\n\n    drawBombs() {\n        this.bombs.forEach(bomb => {\n            bomb.update();\n            bomb.render();\n            this.speed = bomb.speed;\n            speedMeteor.innerHTML = `🚀 SPEED: ${this.speed}`;\n        });\n        \n    }\n\n    draw(ctx) {\n        this.drawBombs(ctx);\n    }\n\n    removeBomb() {\n        let userSolutionInput = document.getElementById('solution_input');\n        userSolutionInput.addEventListener('keypress', (e) => {\n            var key = e.which || e.keyCode;\n            if (key === 13) {\n                this.userSolution = document.getElementById('solution_input').value;\n                document.getElementById('solution_input').value = ''\n                \n                this.bombs.forEach ((bomb, idx) => {\n                    if (parseInt(bomb.mathSolution) === parseInt(this.userSolution)) {\n                        bomb.image = bomb.explosionImage;\n                        bomb.context.font = \"100px, Arial\"\n                        bomb.context.fillText('💥💥💥💥', bomb.moveRight + 60, bomb.moveDown + 120);\n                        this.playerScore += 1000 * this.speed;\n                        playerScore.innerHTML = `👑 SCORE: ${this.playerScore}`\n                        this.bombs.splice(idx,1)\n                        // setInterval(() => { this.bombs.splice(idx,1)\n                        // }, 100);\n                    }\n                }) \n            }\n        })\n    }\n\n    countMissedBomb() {\n        this.bombs.forEach((bomb) => {\n            if (bomb.moveDown >= 1300) {\n                this.missed += 1;\n            }\n        })\n        this.missed = this.missed / 229;\n        this.totalMissed += this.missed;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/math_problem_generator.js":
/*!***************************************!*\
  !*** ./src/math_problem_generator.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst symbols = ['+', '-', '*', '/']\n\nfunction mathProblemGenerator(min , max) {\n\n    let int1 = Math.ceil(Math.random() * (max-min) + min) ;\n    let int2 = Math.ceil(Math.random() * (max-min) + min) ;\n    let symbol = symbols[Math.floor(Math.random()*symbols.length)];\n    let divider = Math.ceil(Math.random() * 10) + 1\n\n    if (symbol === '/') {\n        int1 = int2 * divider  ;\n        return `${int1} ${symbol} ${int2}`\n    }\n    \n    if (symbol === '-' && int1 < int2) {\n        return `${int2} ${symbol} ${int1}`\n    }\n\n    if (symbol === '*' && int1 > 10 && int2 > 10) {\n        int1 = int1 - 10\n    }\n\n    return `${int1} ${symbol} ${int2}`\n} \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mathProblemGenerator);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/math_problem_generator.js?");

/***/ }),

/***/ "./src/math_problem_solver.js":
/*!************************************!*\
  !*** ./src/math_problem_solver.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mathProblemSolver(str) {\n    let mathElements = str.split(' ');\n    let int1 = parseInt(mathElements[0]);\n    let int2 = parseInt(mathElements[2]);\n    if (mathElements[1] === '+') {\n        return int1 + int2;\n    }\n\n    if (mathElements[1] === '-') {\n        return int1 - int2;\n    }\n\n    if (mathElements[1] === '*') {\n        return int1 * int2;\n    }\n\n    if (mathElements[1] === '/') {\n        return parseInt(int1 / int2);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mathProblemSolver);\n\n//# sourceURL=webpack:///./src/math_problem_solver.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(options) {\n        this.name = options.name || '';\n        this.score = options.score || 0;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/sorted_score_board.js":
/*!***********************************!*\
  !*** ./src/sorted_score_board.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sortedScoreBoard(obj) {\n\tvar sortable=[];\n\tfor(var key in obj)\n\t\tif(obj.hasOwnProperty(key))\n\t\t\tsortable.push([key, obj[key]]); \n\t\n\tsortable.sort(function(a, b)\n\t{\n\t\tvar x=parseInt(a[1]),\n\t\t\ty=parseInt(b[1]);\n\t\treturn x<y ? -1 : x>y ? 1 : 0;\n\t});\n\treturn sortable.reverse(); \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortedScoreBoard);\n\n//# sourceURL=webpack:///./src/sorted_score_board.js?");

/***/ })

/******/ });