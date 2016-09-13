var app = angular.module('c4app');

app.config(['$translateProvider', function ($translateProvider) {

	// configures staticFilesLoader
	// use languages/il_progetto-en.json, il_progetto-it.json
	$translateProvider.useStaticFilesLoader({
		prefix: 'languages/',
		suffix: '.json?t=1'
	});
	// load 'it' table on startup
	$translateProvider.preferredLanguage('it');
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escape');
	// remember language using localStorage
	// localStorage will fallback to cookieStorage if the browser doesn't support localStorage.
	$translateProvider.useLocalStorage();
}]);

app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
}])

//Set socket URL!
app.config(['$sailsProvider', function ($sailsProvider) {
	// $sailsProvider.url = 'http://localhost:1337';
	$sailsProvider.url = 'http://test.egizio2015.it:1337';
}]);