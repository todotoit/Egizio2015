
app.controller('BlowFakeCtrl', ['$scope', '$timeout', 'C4SailsSrv', function($scope, $timeout, C4SailsSrv){

	console.log('BlowFakeCtrl');
	$('.container > *').each(function(i, e){
		var del = 150*i;
		$(e).css({'opacity':0, y:30})
			.transition({opacity:1, y:0, delay:del}, 400, 'easeInOutCubic')
	})

	$scope.user = C4SailsSrv.loggedUser;
}]);

