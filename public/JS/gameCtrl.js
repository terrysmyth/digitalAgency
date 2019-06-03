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
		let ctx = myCanvas.getContext("2d");
		ctx.fillStyle = "#66FCF1";
//left rectangle
		const drawLeftRect = () => {
			ctx.strokeRect(leftRX, leftRY, rWidth, rHeight);
			ctx.fillRect(leftRX, leftRY, rWidth, rHeight);
			ctx.stroke();
		}

//right rectangle
		const drawRightRect = () => {
			ctx.strokeRect(rightRX, rightRY, rWidth, rHeight);
			ctx.fillRect(rightRX, rightRY, rWidth, rHeight);
			ctx.stroke();
		}

		const keyDownHandler = (e) =>{
			

			if (e.keyCode == 13) {
				myCanvas.style.backgroundImage = "url()";
			}else if (e.keyCode == 79 ) {
				rightRY -= 30;
			}else if (e.keyCode == 76 ) {
				rightRY += 30;
			}else if (e.keyCode == 87 ) {
				leftRY -= 30;
			}else if (e.keyCode == 83 ) {
				leftRY +=30;
			};


// keycode 87 = w      83 = s

		};


		setInterval(function() {

			while (rightRY < 0) {
				rightRY += 10;
			}
			while (rightRY > (myCanvas.height - rHeight) ) {
				rightRY -= 10;
			}
			while (leftRY < 0) {
				leftRY += 10;
			}
			while (leftRY > (myCanvas.height - rHeight) ) {
				leftRY -= 10;
			}
			runGame();

		}, 100)

		const runGame = () => {
			ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)

			drawRightRect();
			drawLeftRect();
		}

		document.addEventListener("keydown", keyDownHandler);





    }) // END

