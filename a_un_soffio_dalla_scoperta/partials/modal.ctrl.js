app.controller('ModalCtrl', ['$scope', '$timeout', 'modal', 'C4SailsSrv', function($scope, $timeout, modal, C4SailsSrv){

	console.log('ModalCtrl');
	
	$scope.modal = modal;

	$scope.closeModal = function(){
		modal.hide();
	}



	function tik(){

		var tz = new Date().toISOString();

		var now = moment(tz).utc();

		var currHour = now.get('hour') + 2;
		var currMin = now.get('minute');

		var remainHours;
		var remainMinutes;

		if(currHour>=0 && currHour<10){
			remainHours = 9 - currHour;
		}else{
			remainHours = 10 + (23-currHour);
		}
		remainMinutes = 60 - currMin;

		$scope.last = {h:remainHours, m:remainMinutes}
	}

	tik();



	$scope.getSharedUrl = function(){
		if(!$scope.provider) return;
		var url = ($scope.provider == 'twitter') ? modal.data.tw : modal.data.fb;
		return url;
	}


}]);