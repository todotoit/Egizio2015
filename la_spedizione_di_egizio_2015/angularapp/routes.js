var app = angular.module('c3app');

app.config(['$httpProvider', '$urlRouterProvider', '$stateProvider', 'TAPPE', function ($httpProvider, $urlRouterProvider, $stateProvider, TAPPE) {

	$urlRouterProvider.when("", "/tappa1");
	$urlRouterProvider.when("/", "/tappa1");
	// For any unmatched url, send to index
	$urlRouterProvider.otherwise("/tappa1");

	$stateProvider
	// .state('home', {
	// 	url: '/',
	// 	templateUrl: 'partials/home/'+TAPPE.status.home+'.html'
	// })
	.state('tappa1', {
		url: '/tappa1',
		templateUrl: 'partials/tappa1/'+TAPPE.status.tappa1+'.html',
		controller: 'tourCtrl',
		onEnter: function(){
			map.panTo(new google.maps.LatLng(45.054279, 7.678198));
		},
		resolve: {
			tappa: function(){
				if(TAPPE.status.tappa1==='endtour'){
					return 'tappa1';
				}
				else{
					return false;
				}
			}
		}
	})
	.state('tappa2', {
		url: '/tappa2',
		templateUrl: 'partials/tappa2/'+TAPPE.status.tappa2+'.html',
		controller: 'tourCtrl',
		onEnter: function(){
			map.panTo(new google.maps.LatLng(45.034818, 7.674729));
		},
		resolve: {
			tappa: function(){
				if(TAPPE.status.tappa2==='endtour'){
					return 'tappa2';
				}
				else{
					return false;
				}
			}
		}
	})
	.state('tappa3', {
		url: '/tappa3',
		templateUrl: 'partials/tappa3/'+TAPPE.status.tappa3+'.html',
		controller: 'tourCtrl',
		onEnter: function(){
			map.panTo(new google.maps.LatLng(45.117221, 7.711770));
		},
		resolve: {
			tappa: function(){
				if(TAPPE.status.tappa3==='endtour'){
					return 'tappa3';
				}
				else{
					return false;
				}
			}
		}
	})
	.state('tappa4', {
		url: '/tappa4',
		templateUrl: 'partials/tappa4/'+TAPPE.status.tappa4+'.html',
		controller: 'tourCtrl',
		onEnter: function(){
			map.panTo(new google.maps.LatLng(45.067811, 7.694571));
		},
		resolve: {
			tappa: function(){
				if(TAPPE.status.tappa4==='endtour'){
					return 'tappa4';
				}
				else{
					return false;
				}
			}
		}
	})
	.state('tappa5', {
		url: '/tappa5',
		templateUrl: 'partials/tappa5/'+TAPPE.status.tappa5+'.html',
		controller: 'tourCtrl',
		onEnter: function(){
			map.panTo(new google.maps.LatLng(45.068946, 7.683237));
		},
		resolve: {
			tappa: function(){
				if(TAPPE.status.tappa5==='endtour'){
					return 'tappa5';
				}
				else{
					return false;
				}
			}
		}
	})

}]);
