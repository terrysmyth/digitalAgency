"use strict";

angular.module("myApp")
    .controller('gameCtrl', function($rootScope, $scope, $location, $firebaseObject, $firebaseArray, $window) {

		const myCanvas = document.getElementById(`gameCanvas`);

		var ctx = myCanvas.getContext("2d");



		const keyDownHandler = (e) =>{
			

			if (e.keyCode == 13) {
				myCanvas.style.backgroundImage = "url()";
			}




		}




		document.addEventListener("keydown", keyDownHandler)





    }) // END

