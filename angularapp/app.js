'use strict';

var app = angular.module('egizioTranslateApp', [
	'ngCookies',
	'pascalprecht.translate',
	'ngSanitize'
]);

app.config(['$translateProvider', function ($translateProvider) {
	// configures staticFilesLoader
	// use languages/il_progetto-en.json, il_progetto-it.json
	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/home-',
		suffix: '.json'
	});
	// load 'it' table on startup
	$translateProvider.preferredLanguage('it');
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escape');
	// remember language using localStorage
	// localStorage will fallback to cookieStorage if the browser doesn't support localStorage.
	// $translateProvider.useLocalStorage();
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


app.controller('AppCtrl', ['$scope', '$translate', '$window', '$http', '$location', function ($scope, $translate, $window, $http, $location) {
	$scope.init = function(){
		$scope.loadJsonLang();
		// detect preferred language
		var preferred = 'it';
		var params = parseQueryString();
		if (params.lang) {
			preferred = params.lang;
		}
		$scope.lang = preferred;
		$translate.use(preferred);

	}

	$scope.enterLanguage = function (langKey) {
		$scope.lang = langKey;
		$translate.use(langKey);
		if (langKey === 'it') {
			$window.location.href='a_un_soffio_dalla_scoperta/?lang=it';
		}
		else if (langKey === 'en')  {
			$window.location.href='a_un_soffio_dalla_scoperta/?lang=en';
		}
	};

	$scope.jsonLanguages = [
		'languages/home-it.json',
		'languages/home-en.json',
		'il_progetto/languages/il_progetto-it.json',
		'il_progetto/languages/il_progetto-en.json',
		'la_strada_per_menfi_e_tebe/languages/la_strada_per_menfi_e_tebe-it.json',
		'la_strada_per_menfi_e_tebe/languages/la_strada_per_menfi_e_tebe-en.json',
		'il_valore_della_riscoperta/languages/il_valore_della_riscoperta-it.json',
		'il_valore_della_riscoperta/languages/il_valore_della_riscoperta-en.json'
	]

	$scope.loadJsonLang = function(){
		angular.forEach($scope.jsonLanguages, function(jsonLang){
			// this will break things ( like IE ) in production
			// console.log('load '+jsonLang+'...')
			$http.get(jsonLang)
				.error(function(err){
					console.log(err);
				})
		});
	}

	$scope.eng = function(classname){
		return ($scope.lang === 'en') ? classname : '';
	}
	$scope.ita = function(classname){
		return ($scope.lang === 'it') ? classname : '';
	}

	$scope.init();
}]);
