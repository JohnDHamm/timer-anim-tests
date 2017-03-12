"use strict";

app.controller("homeCtrl", function($scope, $location){

	$scope.testArray = [
		{ 'id': 0,
			'name': 'zero'},
		{ 'id': 1,
			'name': 'one'},
		{ 'id': 2,
			'name': 'two'},
		{ 'id': 3,
			'name': 'three'},
		{ 'id': 4,
			'name': 'four'},
		{ 'id': 5,
			'name': 'five'}
	]

	let currentAthleteOrder = [ 0, 1, 2, 3, 4, 5 ],
			athleteBtnHeight = 55,
			numAthletes = $scope.testArray.length;

	$scope.recordLap = (id) => {
		//record time + update lastLap
		//animate buttons
		animateButtons(id);
	}

	const animateButtons = (id) => {
		let currentOrderIndex = currentAthleteOrder.indexOf(id);
		let distanceToBottom = (numAthletes - currentOrderIndex - 1) * athleteBtnHeight;
		let btnsToAnimateUp = makeNextButtonsArray(currentOrderIndex);

		TweenLite.to(`#athleteBtn${id}`, .25, {
			top: `+=${distanceToBottom}px`,
			opacity: 0.4,
			ease: Power2.easeInOut,
			onComplete: function() {
				TweenLite.to(`#athleteBtn${id}`, .1, {
					opacity: 1,
					ease:Power2.easeInOut
					})
				}
		});
		TweenLite.to(btnsToAnimateUp, .25, {
			top: `-=${athleteBtnHeight}`,
			ease:Power2.easeInOut
		});
		updateOrder(id, currentOrderIndex);
	}

	const updateOrder = (id, currentOrderIndex) => {
		currentAthleteOrder.splice(currentOrderIndex, 1);
		currentAthleteOrder.push(id);
		console.log("currentAthleteOrder", currentAthleteOrder);
	}

	const makeNextButtonsArray = (currentOrderIndex) => {
		let nextArray = [];
		for (let i = currentOrderIndex + 1 ; i < currentAthleteOrder.length; i++) {
			let nextString = `#athleteBtn${currentAthleteOrder[i]}`;
			nextArray.push(nextString);
		}
		return nextArray;
	}


});
