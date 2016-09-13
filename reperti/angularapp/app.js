'use strict';

var app = angular.module('c4app', [
	'ui.router',
	'ngSanitize',
	'ngCookies',
	'pascalprecht.translate',
	'djds4rce.angular-socialshare',
	'c4UserWidget'
]);

app.config(['$translateProvider', function ($translateProvider) {
	// configures staticFilesLoader
	// use languages/il_valore_della_riscoperta-en.json, il_valore_della_riscoperta-it.json
	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/reperti-',
		suffix: '.json'
	});
	// load 'it' table on startup
	$translateProvider.preferredLanguage('it');
	// remember language using localStorage
	$translateProvider.useSanitizeValueStrategy('escaped');
	// localStorage will fallback to cookieStorage if the browser doesn't support localStorage.
	$translateProvider.useLocalStorage();
}]);





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


app.controller('AppCtrl', ['$scope', '$translate', '$location', 'REPERTI', function ($scope, $translate, $location, REPERTI) {
	// detect preferred language
	var preferred = 'it';
	var params = parseQueryString();
	if (params.lang) {
		preferred = params.lang;
	}
	$scope.lang = preferred;
	$translate.use(preferred);

	$scope.reperti = REPERTI.list;

	$scope.changeLanguage = function (langKey) {
		// "sadly", this requires a page reload
		var lang = '';
		if (langKey !== 'it') {
			lang = '?lang=' + langKey;
		}

		return "" + window.location.origin + window.location.pathname + lang;
	};

	$scope.eng = function(classname){
		return ($scope.lang === 'en') ? classname : '';
	}
	$scope.ita = function(classname){
		return ($scope.lang === 'it') ? classname : '';
	}

	$scope.goBack = function(){
		var search = window.location.search || '?lang=it';
		var host = window.location.host;
		var sectionTag = "#section10"
		var parentUrl = 'http://' + host + '/' + search;
		if(document.referrer.indexOf(host) === -1){
			return parentUrl;
		}
		else{
			return parentUrl + sectionTag;
		}
	}

	$scope.getL10NLink = function(url) {
		if ($scope.lang !== 'it')
			return url + '?lang=' + $scope.lang;

		return url;
	};
}]);





app.controller('RepertoCtrl', ['$scope', '$state', 'REPERTI', '$http', function($scope, $state, REPERTI, $http){
	var current = $state.current.name;
	$scope.reperto = {};
	angular.forEach(REPERTI.list, function(r){
		if(current === r.id){
			$scope.reperto = r;
		}
	});

	$scope.users = [];

	$http.get('http://test.egizio2015.it/relic/list/' + $scope.reperto.service_id)
		.success(function(data){
			console.log(data);
			$scope.users = data.users;
		})
		.error(function(data){
			console.log(data);
		})
}]);






