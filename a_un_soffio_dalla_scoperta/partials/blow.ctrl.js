

app.controller('BlowCtrl', ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval){

	console.log('BlowCtrl');
	// $('.container > *').each(function(i, e){
	// 	var del = 150*i;
	// 	$(e).css({'opacity':0, y:30})
	// 		.transition({opacity:1, y:0, delay:del}, 400, 'easeInOutCubic')
	// })

	var me;
	$timeout(function(){
		if(navigator.appName.indexOf("Microsoft") != -1){
			me = window['Mic'];
		}else{
			me = document['Mic'];
		}
		console.log(me);
	})
    
    $scope.label1=false;
    $scope.label2=false;
    $scope.label3=false;
	$scope.check = function(v){
			console.info(v);
		$timeout(function(){
			if(v == 'S'){
				console.log('OK');
			}
			if(v == 'N'){
				$scope.label1=false;
				$scope.label2=true;
			}
			if(v == 'Y'){
				$scope.label1=true;
			}
			if(v == 'G'){
				$scope.performBlow()
			}
			if(v == 'I'){
				$scope.label3=true;
				$timeout(function(){
					$scope.blow(null, true)
				}, 5000)
			}
		})
	}
	

}]);



function general_JS_call( val ){
	angular.element(document.getElementById('stp5')).scope().check(val);
}
