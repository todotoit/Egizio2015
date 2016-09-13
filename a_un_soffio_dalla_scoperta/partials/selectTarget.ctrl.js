app.controller('SelectTargetCtrl', ['$scope', '$rootScope', '$timeout', 'C4SailsSrv', function($scope, $rootScope, $timeout, C4SailsSrv){

	console.log('SelectTargetCtrl');

	$('.container > *').each(function(i, e){
		var del = 150*i;
		$(e).css({'opacity':0, y:30})
			.transition({opacity:1, y:0, delay:del}, 400, 'easeInOutCubic')
	})

	$scope.init = function(){
		$scope.getBlowHistory();
	}

	var blowsHistory = C4SailsSrv.blowsHistory;

	$scope.getBlowHistory = function(){
		console.log('get blows')
		C4SailsSrv.getBlowHistory()
			.then(function (data) {
				console.log(data)
				$scope.setBlowHistory(data.coordinates);
			}, function (res) {
				console.log(res)
			});
	}

	$scope.setBlowHistory = function(blows){
		C4SailsSrv.setBlowHistory(blows);
		blowsHistory = C4SailsSrv.blowsHistory;
		$scope.createHistory(blowsHistory);
	}

	$scope.createHistory = function(blowsHistory){
		// create dots previously stored
		$timeout(function(){
			console.log('blows?',blowsHistory)
			d3.select('#relic_area')
				.selectAll('circle')
				.data(blowsHistory)
				.enter()
				.append('circle')
				.style('display', function(d){
					if(d.x < 5 && d.y < 4){
						return 'none';
					}
				})
				.attr('cx', function(d){
					// if(d.x < 33){
					// 	d.x = 33;
					// }
					return d.x +252;
				})
				.attr('cy', function(d){ 
					// if(d.y < 15){
					// 	d.y = 15;
					// }
					return d.y +21;
				})
				.attr('r', 8)
				.style('fill', 'white')
				.style('opacity', '.5')
				.style('stroke', 'white')
				.style('stroke-width', '0')

		})
	}

	var _removeListener = $rootScope.$on('NEW_DOT_ADDED', function(){
		console.log('received')
		var last = blowsHistory[blowsHistory.length-1];

		// 15 < cy < 328   40 < cx < 350

		d3.select('#relic_area')
			.append('circle')
			.attr('cx', last.x)
			.attr('cy', last.y)
			.attr('r', 0)
			.style('fill', '#3d3d3d')
			.style('stroke', 'white')
			.style('stroke-width', 3)
			.transition()
			.duration(700)
			.ease("bounce")
			.attr('r', 10)

	})

	$scope.$on('$destroy', function(){
		_removeListener();
	})

	$scope.init();

}]);