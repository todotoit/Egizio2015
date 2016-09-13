'use strict';

var app = angular.module('c4app', [
	'ngCookies',
	'pascalprecht.translate',
	'ngSanitize',
	'djds4rce.angular-socialshare',
	'C4SailsModule',
	'underscore',
	'ngSails'
]);



// Parse Query String params into object
var parseQueryString = function() {
	var str = window.location.search;
	var objURL = {};

	str.replace(
		new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
		function( $0, $1, $2, $3 ){
			objURL[ $1 ] = $3;
		}
	);
	return objURL;
};

app.controller('AppCtrl', ['$scope', '$translate', '$location', '$interval', '$sails', 'RouterSrv', 'C4SailsSrv', '_', 'mover', '$timeout', 'modal', '$http',
	function ($scope, $translate, $location, $interval, $sails, RouterSrv, C4SailsSrv, _, mover, $timeout, modal, $http) {


	$scope.c4Ended = true;

	$scope.modal = modal;
	$scope.latestUsers = [];

	var md = new MobileDetect(window.navigator.userAgent);
	if(md.mobile()){
		modal.show('is_tablet', true);
		mover.disable();
		return;
	}


	$scope.init = function(){
		// detect preferred language

		var reg = $translate.storage().get();

		var preferred = (reg) ? reg : 'it';
		
		var params = parseQueryString();
		if (params.lang) {
			preferred = params.lang;
		}
		$scope.lang = preferred;
		$translate.use(preferred);
		
		$scope.mover = mover;

		$scope.auth();
		$scope.helloSession();
		$scope.getQueue();

		$scope.stats = null;
		
		if($scope.c4Ended){
			$scope.updateContribsEnd();
		}else{
			$scope.updateContribs();
		}
		
		
	};


	$scope.updateContribs = function(){

		$http.get('http://test.egizio2015.it/stats')
			.success(function(data){
				console.info(data);
				$scope.stats = data;
			})
			.error(function(data){
				console.log(data);

			})

		$http.get('http://test.egizio2015.it/stats/contributors')
			.success(function(data){
				$scope.latestUsers = data.contributors;
			})
			.error(function(data){
				console.log(data);
			})
	}

	$scope.updateContribsEnd = function(){
		$http.get('http://test.egizio2015.it/stats')
			.success(function(data){
				console.info(data);
				$scope.stats = data;
			})
			.error(function(data){
				console.log(data);

			})

		$http.get('http://test.egizio2015.it/relic/list/all')
			.success(function(data){
				$scope.latestUsers = shuffle(data.users);
			})
			.error(function(data){
				console.log(data);
			})
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  while (0 !== currentIndex) {

	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}


	$scope.changeLanguage = function (langKey) {
		// "sadly", this requires a page reload
		var lang = '';
		if (langKey !== 'it') {
			lang = '?lang=' + langKey;
		}

		return "" + window.location.origin + window.location.pathname + lang;
	};

	$scope.getL10NLink = function(url) {
		if ($scope.lang !== 'it')
			return url + '?lang=' + $scope.lang;

		return url;
	};

	$scope.eng = function(classname){
		return ($scope.lang === 'en') ? classname : '';
	}
	$scope.ita = function(classname){
		return ($scope.lang === 'it') ? classname : '';
	}

	$scope.partial = RouterSrv.home;
	$scope.go = function(partial){
		$scope.partial = RouterSrv.go(partial);
	}
	

	$scope.loggedUser = C4SailsSrv.loggedUser;
	$scope.firstUser = C4SailsSrv.firstUser;
	$scope.appUser = C4SailsSrv.appUser;
	$scope.queueUsers = C4SailsSrv.queueUsers;
	$scope.queueLength = C4SailsSrv.queueLength;
	$scope.queueLimit = C4SailsSrv.queueLimit;

	$scope.logged = false;
	$scope.qu = false;
	$scope.mic = undefined;
	$scope.wait = false;
	$scope.timer = 0;
	$scope.performTimer = 60;
	$scope.error = false;
	$scope.session = undefined;
	$scope.sessionCoords = {
		x:0,
		y:0
	}

	$scope.auth = function(){
		if (C4SailsSrv.isLogged()){
			$scope.logUser($scope.loggedUser);
			$scope.provider = $scope.loggedUser.provider;
		}
		else{
			$scope.profile();
		}
	}

	$scope.profile = function () {
		C4SailsSrv.profile()
			.then(function (user) {
				console.log(user)
				$scope.logUser(user)
				$scope.provider = user.provider;
			}, function (res) {
				console.log(res)
				//mover.goDown();
			});
	};

	$scope.logUser = function(user){
		C4SailsSrv.logUser(user);
		$scope.logged = true;
		$scope.loggedUser = user;
		$scope.go('queue');
		$timeout(function(){
			//mover.goDown();
		}, 2500)
		
	}

	$scope.helloSession = function(){
		C4SailsSrv.helloSession()
			.then(function(res){
				console.log(res)
			}, function(res){
				console.log('Houston, we got a problem!');
			});
	}

	$scope.getQueue = function(){
		C4SailsSrv.getQueue()
			.then(function(res){
				console.log(res)
				$scope.setQueue(res);
			}, function(res){
				console.log('Houston, we got a problem!');
			});
	}

	$scope.setQueue = function(queue){
		C4SailsSrv.setQueue(queue);
		$scope.setUsers();
		$scope.setTimer($scope.queueLength+1);
	}

	$scope.setUsers = function(){
		$scope.loggedUser = C4SailsSrv.loggedUser;
		$scope.firstUser = C4SailsSrv.firstUser;
		$scope.appUser = C4SailsSrv.appUser;
		$scope.queueUsers = C4SailsSrv.queueUsers;
		$scope.queueLength = C4SailsSrv.queueLength;
	}

	$scope.inter = undefined;

	$scope.setTimer = function(nUsers){
		if($scope.isYourTurn()){
			$scope.timer = 0;
		}
		else{
			$scope.timer = 40000*(nUsers);
			if(!$scope.inter){
				$scope.inter = $interval(function() {
					if ($scope.timer > 0) {
						$scope.timer = $scope.timer - 1000;
					}
					else{
						$interval.cancel($scope.inter);
						$scope.inter = undefined;
						if($scope.isYourTurn()){
							$scope.wait = false;
						}
						else{
							$scope.wait = true;
						}
					}
				}, 1000);
			}
		}
	}

	$scope.performInter = undefined;

	$scope.setPerformTimer = function(){
		$scope.performInter = $interval(function() {
			if ($scope.performTimer > 0) {
				$scope.performTimer = $scope.performTimer - 1;
			}
			else{
				$interval.cancel($scope.performInter);
				$scope.performInter = undefined;
				$scope.performTimer = 60;
			}
		}, 1000);
	}

	$scope.isYourTurn = function(){
		return C4SailsSrv.isYourTurn();
	}

	$scope.startSession = function(){
		C4SailsSrv.startSession()
			.then(function(res){
				console.log(res)
			}, function(res){
				console.log('Houston, we got a problem!');
				$scope.deleteUser();
			});
	}
	$scope.sessionAim = function(mic){
		C4SailsSrv.sessionAim(mic)
			.then(function(res){
				console.log(res)
				$scope.inputSource();
			}, function(res){
				console.log('Houston, we got a problem!');
				$scope.deleteUser();
			});
	}
	$scope.sessionBlow = function(coords){
		C4SailsSrv.sessionBlow(coords)
			.then(function(res){
				console.log(res)
				$scope.go('perform');
				mover.goUp();
				mover.disable();
				$scope.updateContribs();
			}, function(res){
				console.log('Houston, we got a problem!');
				$scope.deleteUser();
			});
	}

	$scope.logout = function(){
		console.log('logout');
		C4SailsSrv.logout()
			.then(function(res){
				console.log(res)
				$scope.deleteUser();
			}, function(res){
				// console.log('Houston, we got a problem!');
				console.log(res)
			});
	}

	$scope.deleteUser = function(){
		console.log('deleteUser');
		C4SailsSrv.loggedout();
		$scope.loggedUser = undefined;
		$scope.appUser = undefined;
		$scope.logged = false;
		$scope.session = undefined;
		$scope.mic = undefined;
		$scope.go('login');
		mover.goUp();
		mover.enable();
	}


	$sails.on('status', function(status) {
		console.log("Received status from robot:", status);
		if (status.hasOwnProperty('robot')) {
			switch(status.robot){
				case 'ready':
					$scope.error = false;
					console.log('ready')
					modal.selfhide();
					mover.enable();
					break;
				case 'offline':
					$scope.error = true;
					console.log('offline')
					modal.show('state_night', true);
					mover.disable();
					break;
				case 'connection lost':
					$scope.error = true;
					console.log('connection lost')
					modal.show('state_maintenance', true);
					mover.disable();
					break;
				case 'maintenance':
					$scope.error = true;
					console.log('error')
					modal.show('state_maintenance', true);
					mover.disable();
					break;
				case 'refill':
					$scope.error = true;
					console.log('refill')
					//modal.show('state_refill', true);
					modal.show('state_refill', true);
					mover.disable();
					break;
			}	
		}
	});

	// Watching for updates
	$sails.on("session", function (message) {
		console.log('MESSAGE RECEIVED!!!',message)
		if(!$scope.appUser || message.status === 'quit' || message.status === 'ok'|| $scope.isYourTurn()){
			$scope.getQueue();
		}

		if(message.length){
			message = message[0];
		}
		console.log('USERS',$scope.loggedUser,message.user)
		if($scope.loggedUser && message.user === $scope.loggedUser.id){

			$scope.session = message.id;
			$scope.qu = true;
			console.log('session', message.id);
			switch(message.status){
				case 'ok':
					console.log('fine sessione');
					$interval.cancel($scope.performInter);
					$scope.performInter = undefined;
					$scope.performTimer = 60;
					$scope.retry();
					break;
				case 'quit':
					//mover.goDown();
					$interval.cancel($scope.performInter);
					$scope.performInter = undefined;
					$scope.performTimer = 60;
					$scope.mic = undefined;
					$scope.go('queue');
					break;
				case 'aim':
					//mover.goDown();
					if($scope.mic !== undefined){
						$scope.go('selectTarget');
					}
					else{
						$scope.go('selectIo');
					}
					$scope.setPerformTimer();
					break;
				// default:
				// 	$scope.go('selectIo');
				// 	break;
			}
		}
	});

	$sails.on("video", function (message) {
		console.log('VIDEO RECEIVED!!!',message);
		if(message.status == 'ended' && message.id == $scope.session){
			message.lang = $scope.lang;
			modal.show('share_video', false, message);
			$scope.logout();
		}
	});

	$scope.queue = function(val){
		$scope.qu = val;
		if(val){
			$scope.startSession();
		}
		$scope.go('selectIo');
	}

	$scope.input = function(val){
		$scope.mic = val;
		if($scope.qu){
			if(!$scope.isYourTurn()){
				$scope.go('wait');
				// var inter = $interval(function() {
				// 	if ($scope.timer > 0) {
				// 		$scope.timer = $scope.timer - 1000;
				// 	}
				// 	else{
				// 		$scope.getBlowHistory();
				// 		$interval.cancel(inter);
				// 		inter = undefined;

				// 		if($scope.isYourTurn()){
				// 			$scope.wait = false;
				// 			$scope.go('selectTarget');
				// 		}
				// 		else{
				// 			$scope.wait = true;
				// 		}
				// 	}
				// }, 1000);
			}
			else{
				$scope.go('selectTarget');
			}
		}
		else{
			$scope.blow()
		}
	}

	

	$scope.blow = function(coords, gotoFakeBlow){
		if(gotoFakeBlow) $scope.mic = null;
		if(coords){
			console.log('blow at',coords,' with mic:',$scope.mic)
			$scope.sessionCoords = coords;
			$scope.sessionAim($scope.mic);
		}
		else{
			$scope.inputSource();
		}
	}

	$scope.inputSource = function(){
		if ($scope.mic) {
			$scope.go('blow');
		}
		else{
			$scope.go('blowFake');
		}	
	}

	$scope.performBlow = function(){
		if($scope.qu){
			$scope.sessionBlow($scope.sessionCoords);
			//$scope.go('perform'); // test
			//mover.goUp(); // test
		}
		else{
			$scope.retry();
		}
	}

	$scope.retry = function(){
		$scope.go('queue');

		if($scope.qu){
			modal.show('prepare_video');
		}else{
			//modal.show('share_blow');
			$scope.go('perform');
			mover.goUp();
			mover.disable();
			$scope.updateContribs();
		}
		
		//mover.disable();
		
		//$scope.logged = false;
		$scope.qu=false;
	}

	$scope.init();

}]);

app.filter('millSecondsToTimeString', function() {
	return function(millseconds) {
		var seconds = Math.floor(millseconds / 1000);
		var days = Math.floor(seconds / 86400);
		var hours = Math.floor((seconds % 86400) / 3600);
		var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
		seconds = Math.floor(seconds % 60);
		var timeString = '';
		if(days > 0) timeString += (days > 9) ? (days + " : ") : ("0" + days + " : ");
		if(hours > 0){
			timeString += (hours > 9) ? (hours) : ("0" + hours);	
			timeString += "hours ";
		} 
		if(minutes > 0){
			timeString += (minutes > 9) ? (minutes) : ("0" + minutes);
			timeString += "min ";
		}
		if(seconds >= 0){
			timeString += (seconds > 9) ? (seconds) : ("0" + seconds);
			timeString += "sec";
		}
		return timeString;
	}
});

app.directive('sscrollArrow', function() {
	return {
		restrict: 'A',
		link: function(scope, $elm) {

			var up = true;
			var h = $(document).height();
			var valid = true;
			var isUp = true;
			$elm.on('click', function() {
				toggle();
			});

			var listen = true;
			window.addEventListener('mousewheel', function(e){
				if(!listen) return;
				console.log(e.wheelDelta, listen);
			    if(e.wheelDelta < 0){
			    	if(up) goDown();
			    }else{
			    	if(!up) goUp();
			    }
			    setTimeout(function(){
					listen=true;
				}, 1000);
				listen=false;
			});


			function toggle(){
				if(!valid) return;
				if(up){
					goDown();
				}else{
					goUp();
				}
			}

			function goDown(){
				if(!valid) return;
				valid=false;
				console.log('goDown');
				$('#divTop').transition({y:h*-1}, 600)
				$('#divBottom').transition({y:h*-1, complete:done}, 600)
				isUp = false;
			}
			function goUp(){
				if(!valid) return;
				valid=false;
				console.log('goUp');
				$('#divTop').transition({y:0}, 600)
				$('#divBottom').transition({y:0, complete:done}, 600)
				isUp=true;
			}


			function done(){
				console.log('done');
				valid=true;
				up = isUp;
			}


		}
	}
});

app.directive('touchable', ['$rootScope', '$document', 'C4SailsSrv', '$timeout', 
	function ($rootScope, $document, C4SailsSrv, $timeout) {
	return function(scope, element, attr) {

		console.log(element)


		// on middleware
		var screenWidth = 255, screenHeight = 200;
		var areaWidth = 65, areaHeight = 40, positionOffset = 106;
		var scaleFactor = 1;
		

		var area = element.context;
		var headerOffset = 195;
		var coordinates = {
			x: 0,
			y: 0
		}

		var uiEvent = {
			touchstart: 'mousedown',
			touchend: 'mouseup'
		}

		element.context.addEventListener(uiEvent.touchstart, initTouch);

		var deb = _.debounce(mouseup, 190);
		
		function initTouch(event) {
			element.on(uiEvent.touchend, deb);
		}



		function mouseup(e) {
			// prevent from double click
			element.context.removeEventListener(uiEvent.touchstart, initTouch)
			element.off(uiEvent.touchend, deb);
			element.context.addEventListener(uiEvent.touchend, function(event) {
				element.context.removeEventListener(uiEvent.touchend, mouseup);
				event.preventDefault();
			});
			console.log(e);

			if(!e.offsetX) {
				
				var target = e.target || e.srcElement;
				target = $(target).parent('#relic_area').children('rect')[0];
				var rect = target.getBoundingClientRect();
				// x="32" y="10"
				// x="252" y="21"
				e.offsetX = e.clientX - rect.left +252,
				e.offsetY = e.clientY - rect.top +21;
			}

			//get coordinates relative to area space
			coordinates.x = Math.min( Math.max(254, e.offsetX), 450);
			coordinates.y = Math.min( Math.max(25, e.offsetY), 276);
			// coordinates.x = e.offsetX;
			// coordinates.y = e.offsetY;
			console.log("screen coordinates -> X:", coordinates.x, "\nY:",coordinates.y);
	
			saveBlow(coordinates);
			$rootScope.$emit('NEW_DOT_ADDED', {x:coordinates.x,y:coordinates.y});

			coordinates.x = coordinates.x - 252;
			coordinates.y = coordinates.y -21;


			// on middleware
			var c = {}
			c.x = coordinates.y;
			c.y = coordinates.x;


			c.x = c.x/scaleFactor - screenWidth/2;
			c.y = c.y/scaleFactor;
			// map to real area (c - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			// 0 - 50 because area was splitted above
			c.x = (c.x - 0) * (areaWidth - 0) / (screenWidth - 0) + 0;
			c.y = (c.y - 0) * ((areaHeight+positionOffset/2) - positionOffset/2) / (screenHeight - 0) + positionOffset/2;
			// convert in meters(because areaWidth and areaHeight are in cm)
			c.x = c.x/100;
			c.y = c.y/100;


			console.log("touch coordinates -> X:", coordinates.x, "\nY:",coordinates.y);
			console.log("middleware coordinates -> X:", c.x, "\nY:",c.y);
			$timeout(function(){
				scope.blow(coordinates);
			},1500);
			console.log('emit')
		}
		function saveBlow(coords) {
			C4SailsSrv.blowsHistory.push(coords);
		}
	};
}]);
