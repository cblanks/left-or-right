'use strict';

/**
 * @ngdoc function
 * @name leftOrRightApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the leftOrRightApp
 */
angular.module('leftOrRightApp')
  .controller('ResultsCtrl', function (dataAccessService, $scope) {
    
/*
    $scope.minDuration = {
      left: 50,
      right: 80
    };

    $scope.maxDuration = {
      left: 390,
      right: 420
    };
 */
    $scope.dataset = dataAccessService.getData();
  }
);
