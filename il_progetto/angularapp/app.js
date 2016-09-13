'use strict';

var app = angular.module('egizioTranslateApp', [
	'ngCookies',
	'pascalprecht.translate',
	'ngSanitize',
	'c4UserWidget'
]);

app.config(['$translateProvider', function ($translateProvider) {
	// configures staticFilesLoader
	// use languages/il_progetto-en.json, il_progetto-it.json
	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/il_progetto-',
		suffix: '.json'
	});
	// load 'it' table on startup
	$translateProvider.preferredLanguage('it');
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escape');
	// remember language using localStorage
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


// app.controller('AppCtrl', ['$scope', '$translate', '$location', function ($scope, $translate, $location) {
// 	// detect preferred language
// 	var preferred = 'it';
// 	var params = parseQueryString();
// 	if (params.lang) {
// 		preferred = params.lang;
// 	}
// 	$scope.lang = preferred;
// 	$translate.use(preferred);

// 	str.replace(
// 		new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
// 		function( $0, $1, $2, $3 ){
// 			objURL[ $1 ] = $3;
// 		}
// 	);
// 	return objURL;
// }]);


app.controller('AppCtrl', ['$scope', '$translate', '$location', function ($scope, $translate, $location) {
	// detect preferred language
	var preferred = 'it';
	var params = parseQueryString();
	if (params.lang) {
		preferred = params.lang;
	}
	$scope.lang = preferred;
	$translate.use(preferred);

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

	$scope.getL10NLink = function(url) {
		if ($scope.lang !== 'it')
			return url + '?lang=' + $scope.lang;

		return url;
	};
}]);
