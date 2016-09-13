app.controller('QueueCtrl', ['$scope', 'C4SailsSrv', '$timeout', function($scope, C4SailsSrv, $timeout){

	console.log('QueueCtrl');

	$scope.user = C4SailsSrv.loggedUser;

	$scope.getNumber = function(){
		return C4SailsSrv.queueLength + 1;
	}

	$scope.isMyTurn = function(){
		return C4SailsSrv.isYourTurn();
	}

}]);
