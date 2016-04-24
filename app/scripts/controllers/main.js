'use strict';

/**
 * @ngdoc function
 * @name leftOrRightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leftOrRightApp
 */
angular.module('leftOrRightApp')
  .controller('MainCtrl', function (dataAccessService, $scope, $timeout) {
    
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
    
    $scope.data = function() { return dataAccessService.getData(); };
    $scope.incrementLeft = function() { dataAccessService.incrementLeft(); };
    $scope.incrementRight = function() { dataAccessService.incrementRight(); };
    $scope.reset = function() { dataAccessService.resetData(); };

});
