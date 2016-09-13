'use strict';

var app = angular.module('egizioTranslateApp', [
	'ngCookies',
	'pascalprecht.translate',
	'ngSanitize'
]);


app.constant('TAPPE',{
	// set tappa status as
	// 'pretour' 'intour' 'justendtour' 'endtour'
	status: {
		'tappa1' : 'endtour',
		'tappa2' : 'endtour',
		'tappa3' : 'endtour',
		'tappa4' : 'endtour',
		'tappa5' : 'endtour'
	}
});


app.config(['$translateProvider', function ($translateProvider) {
	// configures staticFilesLoader
	// use languages/il_progetto-en.json, il_progetto-it.json
	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/',
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

app.controller('AppCtrl', ['$scope', '$translate', '$window', '$http', 'TAPPE', function ($scope, $translate, $window, $http, TAPPE) {
	
	$scope.enterLanguage = function (langKey) {
		$scope.lang = langKey;
		$translate.use(langKey);
		$window.location.href='a_un_soffio_dalla_scoperta/';
	};

	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
		$scope.lang = langKey;
	};

	$scope.goBack = function(){
		var search = window.location.search || '?lang=it';
		var host = window.location.host;
		var sectionTag = '';
		var path = '';
		if (window.location.pathname.indexOf('mobile/') > -1){
			path = 'mobile/';
		}
		switch (window.location.pathname.replace('mobile/','')){
			case '/la_strada_per_menfi_e_tebe/':
				sectionTag = '#section4';
				break;
			case '/il_valore_della_riscoperta/':
				sectionTag = '#section5';
				break;
			case '/la_spedizione_di_egizio_2015/':
				sectionTag = '#section8';
				break;
			default:
				sectionTag = '#section3';
				break;
		}
		var parentUrl = 'http://' + host + '/' + path + search;
		if(document.referrer.indexOf(host) === -1){
			return parentUrl;
		}
		else{
			return parentUrl + sectionTag;
		}
	}

	$scope.eng = function(classname){
		return ($scope.lang === 'en') ? classname : '';
	}
	$scope.ita = function(classname){
		return ($scope.lang === 'it') ? classname : '';
	}

	$scope.lang = $translate.proposedLanguage();

	$scope.status = TAPPE.status;

	$scope.imgs ={
		'1': [],
		'2': [],
		'3': [],
		'4': [],
		'5': [],
	};
	$scope.readJson = function(tappa){
		console.log('read json')
		$http.get("feeds/tappa"+tappa+"/feeds.json")
			.success(function(data){
				$scope.imgs[tappa] = data;
			})
			.error(function(err){
				console.log(err);
				$scope.imgs[tappa] = [];
			})
	}

}]);

app.controller('Tappa1Ctrl',['$scope',function($scope){
	$scope.tappaNum = '1';
	// set tappa state as
	// 'pretour' 'intour' 'justendtour' 'endtour'
	$scope.tappaState = $scope.status.tappa1;

	$scope.snippet = 'snippets/'+$scope.tappaState+'.html'
	if ($scope.tappaState === 'endtour') {
		$scope.readJson('1');
	};
}]);

app.controller('Tappa2Ctrl',['$scope',function($scope){
	$scope.tappaNum = '2';
	// set tappa state as
	// 'pretour' 'intour' 'justendtour' 'endtour'
	$scope.tappaState = $scope.status.tappa2;

	$scope.snippet = 'snippets/'+$scope.tappaState+'.html'
	if ($scope.tappaState === 'endtour') {
		$scope.readJson('2');
	}
}]);

app.controller('Tappa3Ctrl',['$scope',function($scope){
	$scope.tappaNum = '3';
	// set tappa state as
	// 'pretour' 'intour' 'justendtour' 'endtour'
	$scope.tappaState = $scope.status.tappa3;

	$scope.snippet = 'snippets/'+$scope.tappaState+'.html'
	if ($scope.tappaState === 'endtour') {
		$scope.readJson('3');
	}
}]);

app.controller('Tappa4Ctrl',['$scope',function($scope){
	$scope.tappaNum = '4';
	// set tappa state as
	// 'pretour' 'intour' 'justendtour' 'endtour'
	$scope.tappaState = $scope.status.tappa4;

	$scope.snippet = 'snippets/'+$scope.tappaState+'.html'
	if ($scope.tappaState === 'endtour') {
		$scope.readJson('4');
	}
}]);

app.controller('Tappa5Ctrl',['$scope',function($scope){
	$scope.tappaNum = '5';
	// set tappa state as
	// 'pretour' 'intour' 'justendtour' 'endtour'
	$scope.tappaState = $scope.status.tappa5;

	$scope.snippet = 'snippets/'+$scope.tappaState+'.html'
	if ($scope.tappaState === 'endtour') {
		$scope.readJson('5');
	}
}]);

app.controller('C4',['$scope','$http', function($scope,$http){
	console.log('C4');
	$scope.num = 0;
	$http.get('http://test.egizio2015.it/stats')
		.success(function(data){
			console.log(data);
			$scope.stats = data;
			$scope.num = data.users_count;
			if(data.active_user){
				$scope.user = data.active_user;
			}
			
		})
		.error(function(data){
			console.log(data);
		})
}]);
