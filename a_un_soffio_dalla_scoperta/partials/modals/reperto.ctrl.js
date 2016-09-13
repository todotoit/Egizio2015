app.controller('RepertoCtrl', ['$scope', '$timeout', 'REPERTI', '$translate', 
	function($scope, $timeout, REPERTI, $translate){

	// load last reperto details from api
	// get id
	// get users array
	// then

	var id = 1;
	var users = [{img:'me.jpeg'}, {img:'me.jpeg'}, {img:'me.jpeg'}];

	$scope.rep = {};
	angular.forEach(REPERTI.list, function(r){
		if(id === r.service_id){
			$scope.rep = r;
		}
	});


	$translate($scope.rep.id + '.name')
		.then(function(message){
			$scope.rep.name = message;
		})

	$translate($scope.rep.id + '.art')
		.then(function(message){
			$scope.rep.art = message;
		})

	$scope.rep.num = users.length;
	$scope.users = users;

}]);