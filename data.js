var TestApp = angular.module('TestApp', []);

TestApp.controller('MyController',['$scope',function($scope){
	$scope.today = new Date();
}]);


TestApp.filter('capitalize',function(){
	return function(input){
		if(input){
			return input[0].toUpperCase() + input.slice(1);
		}
	}
});