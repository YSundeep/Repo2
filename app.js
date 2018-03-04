var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/createUser",{
		templateUrl : "modules/create/createuser.html", 
		controller : "createuser"
	})
	.when("/viewAllUsers",{
		templateUrl : "modules/view/viewusers.html",
		controller : "viewusers"
	})
	.when("/updateUser",{
		templateUrl : "modules/update/updateuser.html",
		controller : "updateuser"
	})
	.when("/deleteUser",{
		templateUrl : "modules/delete/deleteuser.html",
		controller : "deleteuser"
	})
});