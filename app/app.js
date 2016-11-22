angular.module("myApp", [])

.controller("mainController", ['$scope', function($scope) {
  $scope.hello = "hello world";
}]);