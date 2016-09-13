'use strict';

var app = angular.module('c3app', [
	'ui.router',
	'ngCookies',
	'pascalprecht.translate',
	'ngSanitize',
	'djds4rce.angular-socialshare',
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


app.run(['$rootScope', '$state', '$stateParams', '$FB', function($rootScope, $state, $stateParams, $FB){

	// need fb app id
	// $FB.init('113869198637480');

	// It's very handy to add references to $state and $stateParams to the $rootScope
	// so that you can access them from any scope within your applications.For example,
	// <li ui-sref-active="active }"> will set the <li> // to active whenever
	// 'contacts.list' or one of its decendents is active.
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		return console.log("$stateChangeStart to " + toState.to + " - fired when the transition begins. toState,toParams : \n", toState, toParams);
	});

	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams) {
		console.log("$stateChangeError - fired when an error occurs during transition.");
		console.log(arguments);
		return console.log(arguments[5].message);
	});

	$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
		return console.log("$stateChangeSuccess to " + toState.name + " - fired once the state transition is complete.");
	});

	$rootScope.$on("$viewContentLoaded", function(event) {
		return console.log("$viewContentLoaded - fired after dom rendered", event);
	});

	$rootScope.$on("$stateNotFound", function(event, unfoundState, fromState, fromParams) {
		console.log("$stateNotFound " + unfoundState.to + " - fired when a state cannot be found by its name.");
		return console.log(unfoundState, fromState, fromParams);
	});

}]);

app.controller('AppCtrl', ['$scope', '$translate', '$location', 'TAPPE', function ($scope,$translate, $location, TAPPE) {
	$scope.init = function(){
		// initialize gmap
		initialize();

		// detect preferred language
		var preferred = 'it';
		var params = parseQueryString();
		if (params.lang) {
			preferred = params.lang;
		}
		$scope.lang = preferred;
		$translate.use(preferred);

	}

	$scope.changeLanguage = function (langKey) {
		// "sadly", this requires a page reload
		var lang = '';
		if (langKey !== 'it') {
			lang = '?lang=' + langKey;
		}

		return "" + window.location.origin + window.location.pathname + lang;
	};

	$scope.goBack = function(){
		var search = window.location.search || '?lang=it';
		var host = window.location.host;
		var sectionTag = "#section9"
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

	// set tappa status as
	// 'pretour' 'intour' 'endtour'
	$scope.status = TAPPE.status;

	$scope.eng = function(classname){
		return ($scope.lang === 'en') ? classname : '';
	}
	$scope.ita = function(classname){
		return ($scope.lang === 'it') ? classname : '';
	}

	$scope.init();
}]);

app.controller('tourCtrl', ['$scope', 'tappa', '$http',function($scope,tappa, $http){

	$scope.feeds = undefined;

	$scope.readJson = function(tappa){
		$scope.feeds = undefined;
		console.log('read json')
		if(tappa){
			$http.get("partials/"+tappa+"/feeds/feeds.json")
				.success(function(data){
					$scope.feeds = data;
				})
				.error(function(err){
					console.log(err);
				})
		}
		else{
			console.log('no json')
		}
	}

	$scope.initializeGMap = function(){
		initialize();
	}

	$scope.initializeMasonry = function(){
		var container = document.querySelector('#wall');
		var msnry = new Masonry( container, {
			// options
			columnWidth: 194,
			"isFitWidth": true,
			itemSelector: '.item',
			"gutter": 10			  
		});
	}

	$scope.readJson(tappa);
}]);

app.directive('lazy', ['$timeout', function($timeout) {
	return {
		restrict: 'C',
		link: function (scope, elm, attrs) {
			$timeout(function() {
				$(elm).lazyload({
					effect : "fadeIn"
				})
			}, 100);
		}
	}
}]);
