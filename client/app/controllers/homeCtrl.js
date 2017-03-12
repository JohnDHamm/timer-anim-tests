"use strict";

app.controller("homeCtrl", function($scope, $location){

	$scope.testArray = [
		{ 'index': 0,
			'name': 'zero'},
		{ 'index': 1,
			'name': 'one'},
		{ 'index': 2,
			'name': 'two'},
		{ 'index': 3,
			'name': 'three'}
	]

	let currentAthleteOrder = [ 0, 1, 2, 3 ],
			athleteBtnHeight = 60,
			numAthletes = $scope.testArray.length;


	console.log("$scope.testArray", $scope.testArray);
	console.log("numAthletes", numAthletes);

	$scope.recordLap = (index) => {
		console.log("btn index", index);

		updateOrder(index);
	}

	const updateOrder = (index) => {
		let orderIndex = findAthInCurrentOrder(index);
		console.log("orderIndex", orderIndex);
		currentAthleteOrder.splice(orderIndex, 1);
		currentAthleteOrder.push(index);
		console.log("currentAthleteOrder", currentAthleteOrder);
	}

	const findAthInCurrentOrder = (index) => {
		return currentAthleteOrder.indexOf(index);
	}


});
