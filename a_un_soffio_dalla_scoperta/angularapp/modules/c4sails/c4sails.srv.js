var app = angular.module('C4SailsModule');

app.service('C4SailsSrv', ['$http', '$sails', '_', function ($http, $sails, _) {

	var c4sails = {};


	c4sails.loggedUser = undefined;
	c4sails.firstUser = undefined;
	c4sails.appUser = undefined;
	c4sails.queueUsers = [];
	c4sails.queueLimit = 3;
	c4sails.queueLength = 0;
	c4sails.blowsHistory = [];

	c4sails.profile = function () {
		return $http.get('http://test.egizio2015.it/profile')
			.then(function (res) {
				console.log(res)
				return res.data;
			});
	}

	c4sails.getBlowHistory = function () {
		return $http.get('http://test.egizio2015.it/relic/coordinates/')
			.then(function (res) {
				console.log(res)
				return res.data;
			});
	}

	c4sails.setBlowHistory = function(blows){
		c4sails.blowsHistory = blows;
	}

	c4sails.logUser = function (user) {
		c4sails.loggedUser = user;
	}

	c4sails.isLogged = function(){
		return c4sails.loggedUser ? true : false;
	}

	c4sails.getQueue = function(){
		return $sails.get("/session/active")
			.then(function(res){
				console.log(res)
				return res.data;
			});
	}

	c4sails.setQueue = function(queue){
		c4sails.queueUsers = queue;
		c4sails.getUsers();
	}

	c4sails.logout = function(){
		return $http.get("http://test.egizio2015.it/apilogout")
			.then(function(res){
				console.log(res)
				return res.data;
			});
	}

	c4sails.helloSession = function(){
		return $sails.get("/session/hello")
			.then(function(res){
				console.log(res)
				return res.data;
			});
	}

	c4sails.startSession = function(){
		return $sails.get("/session/start")
			.then(function(res){
				console.log(res)
				return res.data;
			});
	}

	c4sails.sessionAim = function(mic){
		return $sails.post("/session/aim",{microphone: mic})
			.then(function(res){
				console.log(res)
				return res.data;
			});
	}

	c4sails.sessionBlow = function(coords){
		return $sails.post("/session/blow",{x: coords.x, y: coords.y})
			.then(function(res){
				console.log(res)
				return res.data;
			});
	}

	c4sails.getUsers = function(){
		var queue = c4sails.queueUsers;

		// get users in queue, first user and current user
		var users = _.pluck(queue, 'user');
		var first = _.first(users);
		var app = _.findWhere(users, {current: true});
		var appUserIndex = _.indexOf(users, app)
		c4sails.appUser = c4sails.queueUsers[appUserIndex];
		c4sails.firstUser = c4sails.queueUsers[0];

		if(c4sails.appUser && !c4sails.isYourTurn()){
			c4sails.queueUsers.splice(appUserIndex);
		}
		
		c4sails.queueUsers.shift();
		c4sails.queueLength = c4sails.queueUsers.length;
		//c4sails.queueLength -= 1;

		if(c4sails.queueLength > c4sails.queueLimit){
			c4sails.queueUsers.splice(c4sails.queueLimit);
		}
	}

	c4sails.isYourTurn = function(){
		return c4sails.firstUser === c4sails.appUser;
	}

	c4sails.loggedout = function(){
		console.log('loggedout');
		c4sails.loggedUser = undefined;
		c4sails.firstUser = undefined;
		c4sails.appUser = undefined;
		c4sails.queueUsers = [];
		c4sails.queueLimit = 3;
		c4sails.queueLength = 0;
		c4sails.blowsHistory = [];
	}


	

	// c4sails.login = function (provider) {
	// 	return $http.get('http://localhost:1337/auth/'+provider)
	// 		.then(function (res) {
	// 			console.log(res)
	// 			user = res.data;
	// 			return user;
	// 		});
	// };

	// c4sails.logout = function () {
	// 	return $http.post('logout')
	// 		.then(function () {
	// 			user = undefined;
	// 			return user;
	// 		});
	// };

	return c4sails;

}]);
