(function () {
    'use strict';

    angular.module('FavMoviesApp', [])
    .controller('MoviesController', MoviesController)

    MoviesController.$inject = ['$scope'];
    function MoviesController($scope){

    $scope.activeZoom = false;
    $scope.number = 1;

    $scope.nextMovie = function() {
      $scope.number++;
      if($scope.number > 5){
        $scope.number = 1;
      }
    };

    $scope.previousMovie = function() {
      $scope.number--;
      if($scope.number == 0){
        $scope.number = 5;
      }
    };

    $scope.zoom = function() {
      $scope.activeZoom = !$scope.activeZoom;
    };
  }
})();