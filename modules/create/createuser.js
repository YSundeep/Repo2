myApp.controller("createuser",function($scope,$http){
	$scope.createUser = function(){
	var userDetails = {
		fname : $scope.fname1,
		lname : $scope.lname1,
		age : $scope.age1,
		email : $scope.email1,
		password : $scope.password1

	};
	var url = 'http://api.qshore.com/add-user';
	$http({
		url : url,
		method : 'POST',
		data : userDetails
	}).then(function(response){
		$scope.userInfo = response.data.data;
		$http({
			url : 'http://api.qshore.com/users',
			method : 'GET'

		}).then(function(response){
			$scope.users = response.data.data;
		},
		function(response){
			console.log('failed to get users');
		});
	},
	function(response){
		console.log('failed to create user');
	});
}

});