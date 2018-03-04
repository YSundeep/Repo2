myApp.controller('viewusers',function($scope,$http){
	$http({
		url : 'http://api.qshore.com/users',
		method : 'GET'
	}).then(function(response){
		$scope.users = response.data.data;
	},
	function(response){
		$scope.error = response.error;
	});
})