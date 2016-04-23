'use strict';

/**
 * @ngdoc function
 * @name leftOrRightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leftOrRightApp
 */
angular.module('leftOrRightApp')
  .controller('MainCtrl', function ($scope, $timeout, localStorageService) {
    
    $scope.currentlyLeft = 0 === Math.round(Math.random());
    $scope.getCurrentSide = function() {
      if($scope.currentlyLeft === true) { 
        return "left";
      } else {
        return "right";
      }
    };
    $scope.period = 10000; // milliseconds
    
    function setFigCaption() {
      $scope.currentlyLeft = !$scope.currentlyLeft;
      $scope.figCaption = "I'm breathing from the " + $scope.getCurrentSide() + ".";
      $timeout(function() { setFigCaption(); }, $scope.period);
    }
    setFigCaption();
    
    $scope.data = localStorageService.get('data') || {
      left: [],
      right: []
    };

    $scope.$watch('data', function () {
      localStorageService.set('data', $scope.data);
    }, true);
    
    $scope.incrementLeft = function() {
      $scope.data.left.push(new Date());
    };

    $scope.incrementRight = function() {
      $scope.data.right.push(new Date());
    };

});
