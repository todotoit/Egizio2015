var app = angular.module('c4app')

app.config(['$httpProvider', '$urlRouterProvider', '$stateProvider', 'REPERTI', function ($httpProvider, $urlRouterProvider, $stateProvider, REPERTI) {

	$urlRouterProvider.when("", "/");
	$urlRouterProvider.when("/", "");
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html'
		})

	angular.forEach(REPERTI.list, function(r){
		$stateProvider.state(r.id, {
				url: '/' + r.id,
				templateUrl: 'partials/reperto.html',
				controller: 'RepertoCtrl'
			})
	})
	
	

}]);