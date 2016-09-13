angular.module('includeExample', ['ngAnimate'])
.controller('EgizioController', ['$scope', function($scope) {
  $scope.templates =
    [ { name: 'head', url: 'newmodules/head.html'},
      { name: 'section1', url: 'newmodules/section1.html'} ];
  $scope.template = $scope.templates[0];
}]);