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

	console.log("$scope.testArray", $scope.testArray);

});
