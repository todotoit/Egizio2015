var app = angular.module('c4app');

app.service('RouterSrv', ['_', function (_) {

	var router = {};

	router.partials = [
			{
				name: 'login',
				url: 'partials/login.html'
			},
			{
				name: 'queue',
				url: 'partials/queue.html'
			},
			{
				name: 'selectIo',
				url: 'partials/selectIo.html'
			},
			{
				name: 'wait',
				url: 'partials/wait.html'
			},
			{
				name: 'selectTarget',
				url: 'partials/selectTarget_new.html'
			},
			{
				name: 'blow',
				url: 'partials/blow.html'
			},
			{
				name: 'blowFake',
				url: 'partials/blowFake.html'
			},
			{
				name: 'perform',
				url: 'partials/perform.html'
			}
		];
	router.home = router.partials[0];

	router.go = function(partialName){
		var partial = _.findWhere(router.partials, {name:partialName});
		return partial; //router.partials[7]; //
	}


	return router;

}]);
