'use strict';

var app = angular.module('c4UserWidget', [
	'underscore',
	'ngSails'
]);

//Set socket URL!
app.config(['$sailsProvider', function ($sailsProvider) {
	// $sailsProvider.url = 'http://localhost:1337';
	$sailsProvider.url = 'http://test.egizio2015.it:1337';
}]);

app.controller('WidgetController', ['$scope', '$interval', '$sails', '_', function ($scope, $interval, $sails, _) {
	$scope.init = function(){
		$scope.helloSession();
		$scope.getQueue();
	};

	$scope.firstUser = undefined;
	$scope.appUser = undefined;
	$scope.queueUsers = [];
	$scope.timer = 0;

	$scope.helloSession = function(){
		$sails.get("/session/hello")
			.then(function(res){
				$scope.getUsers(res.data);
			}, function(res){
				console.log(res)
			});
	}

	$scope.getQueue = function(){
		$sails.get("/session/active")
			.then(function(res){
				$scope.getUsers(res.data);
			}, function(res){
				console.log(res)
			});
	}

	$scope.getUsers = function(queue){
		$scope.queueUsers = queue;

		// get users in queue, first user and current user
		var users = _.pluck(queue, 'user');
		var first = _.first(users);
		var app = _.findWhere(users, {current: true});
		var appUserIndex = _.indexOf(users, app)
		$scope.appUser = $scope.queueUsers[appUserIndex];
		$scope.firstUser = $scope.queueUsers[0];

		if($scope.appUser && !$scope.isYourTurn()){
			$scope.queueUsers.splice(appUserIndex);
		}
		$scope.queueUsers.shift();
		$scope.setTimer($scope.queueUsers.length+1);
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

	$scope.isYourTurn = function(){
		return $scope.firstUser === $scope.appUser;
	}

	// Watching for updates
	$sails.on("session", function (message) {
		if(message.status === 'quit' || message.status === 'ok'){
			$scope.getQueue();
		}
	});

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

app.directive('c4UserWidget', function() {
	return {
		restrict: 'AE',
		templateUrl:'../c4widget/user.widget.html'
	}
});
