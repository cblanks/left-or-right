'use strict';

/**
 * @ngdoc function
 * @name leftOrRightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leftOrRightApp
 */
angular.module('leftOrRightApp')
  .factory('dataAccessService', ['localStorageService', function(localStorageService) {
    
    var zeroData = {
      left: [],
      right: []
    };
      
    function getStoredData() {
      return localStorageService.get('data') || zeroData;
    }
    
    function updateStoredData(d) {
      localStorageService.set('data', d);
    }
    
    return {
      getData: function() { 
        return getStoredData(); 
      },
      incrementLeft: function() { 
        var d = getStoredData();
        d.left.push(new Date());
        updateStoredData(d);
      },
      incrementRight: function() {
        var d = getStoredData();
        d.right.push(new Date());
        updateStoredData(d);
      },
      resetData: function() {
        updateStoredData(zeroData);
      }
    };
  }])
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
