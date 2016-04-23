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
    
    console.log(dataAccessService.getData());

});
