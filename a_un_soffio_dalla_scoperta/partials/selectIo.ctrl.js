app.controller('SelectIoCtrl', ['$scope', '$timeout', 'C4SailsSrv', function($scope, $timeout, C4SailsSrv){

	$timeout(function(){
		$('.container > *').each(function(i, e){
			var del = 150*i;
			$(e).css({'opacity':0, y:30})
				.transition({opacity:1, y:0, delay:del}, 450, 'easeInOutCubic')
		})
	})

	$scope.user = C4SailsSrv.loggedUser;

	$scope.isMyTurn = function(){
		return C4SailsSrv.isYourTurn();
	}

}]);