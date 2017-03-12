"use strict";

const app = angular.module("TeamTimerAnimTestApp", ["ngRoute", "ngMaterial", "ngStorage"])
	.config($routeProvider => {

	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl'
		})

	});
