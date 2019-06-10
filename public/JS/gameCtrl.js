"use strict";

angular.module("myApp")
    .controller('gameCtrl', function($rootScope, $scope, $location, $firebaseObject, $firebaseArray, $window) {

		const myCanvas = document.getElementById(`gameCanvas`);
		let leftRX = 5;
		let leftRY = 23;
		let rightRY = 23;
		let rWidth = 25;
		let rHeight = 80;
		let rightRX = myCanvas.width - (5 + rWidth);
		let bD = 20;
		let bX = (myCanvas.width/2 - bD/2);
		let bColor = "blue";
		let bY = 100;
		let dX = 2;
		let dY = 2; 
		let ctx = myCanvas.getContext("2d");
		ctx.fillStyle = "#66FCF1";

		let rUp = false;
		let rDown = false;
		let lUp = false;
		let lDown = false;


//left rectangle
		const drawLeftRect = () => {
			ctx.beginPath()
			ctx.strokeRect(leftRX, leftRY, rWidth, rHeight);
			ctx.fillRect(leftRX, leftRY, rWidth, rHeight);
			ctx.stroke();
			ctx.closePath();
		}

//right rectangle
		const drawRightRect = () => {
			ctx.beginPath()
			ctx.strokeRect(rightRX, rightRY, rWidth, rHeight);
			ctx.fillRect(rightRX, rightRY, rWidth, rHeight);
			ctx.stroke();
			ctx.closePath();
		}

		const drawCircle = () => {
			ctx.beginPath();
			ctx.arc(bX, bY, bD,0,2*Math.PI);
			ctx.fillStyle = bColor;
			ctx.fill();
			ctx.closePath();
		}


		const keyDownHandler = (e) =>{
			

			if (e.keyCode == 79 ) {
				rUp = true;
			}else if (e.keyCode == 76 ) {
				rDown = true;
			}else if (e.keyCode == 87 ) {
				lUp = true;
			}else if (e.keyCode == 83 ) {
				lDown = true;
			};
		};

		const keyUpHandler = (e) =>{
			

			if (e.keyCode == 79 ) {
				rUp = false;
			}else if (e.keyCode == 76 ) {
				rDown = false;
			}else if (e.keyCode == 87 ) {
				lUp = false;
			}else if (e.keyCode == 83 ) {
				lDown = false;
			};
		};


		setInterval(function() {

			if (rUp && rightRY >= 0) {
				rightRY -= 10;
			}
			if (rDown && rightRY < (myCanvas.height - rHeight) ) {
				rightRY += 10;
			}
			if (lUp && leftRY > 0) {
				leftRY -= 10;
			}
			if (lDown && leftRY < (myCanvas.height - rHeight) ) {
				leftRY += 10;
			}

			if (bX >= myCanvas.width - bD || bX <= 0+bD) {
				dX = -dX;
			}

			if (bY <= 0+bD || bY >= myCanvas.height - bD ) {
				dY= -dY;
			}

			
		




			runGame();

		}, 10)

		const runGame = () => {
			ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
			bX += dX;
			bY += dY

			drawRightRect(rightRX, rightRY);
			drawLeftRect(leftRX, leftRY);
			drawCircle(bX, bY);


		}

		document.addEventListener("keydown", keyDownHandler);
		document.addEventListener("keyup", keyUpHandler);





    }) // END

