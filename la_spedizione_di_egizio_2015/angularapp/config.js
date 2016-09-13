var app = angular.module('c3app');

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

app.constant('TAPPE',{
	// set tappa status as
	// 'pretour' 'intour' 'endtour'
	status: {
		'home': 'endtour',
		'tappa1' : 'endtour',
		'tappa2' : 'endtour',
		'tappa3' : 'endtour',
		'tappa4' : 'endtour',
		'tappa5' : 'endtour'
	}
});
