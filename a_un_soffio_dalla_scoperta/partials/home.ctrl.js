app.controller('HomeCtrl', ['$scope', '$timeout', function($scope, $timeout){
	console.log('HomeCtrl');
	$('.container > *').each(function(i, e){
		var del = 150*i;
		$(e).css({'opacity':0, y:40})
			.transition({opacity:1, y:0, delay:del+2000}, 1000, 'easeInOutCubic')
	})

}]);