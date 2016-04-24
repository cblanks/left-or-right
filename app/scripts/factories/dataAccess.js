'use strict';

/**
 * @ngdoc function
 * @name leftOrRightApp.factory:dataAccess
 * @description
 * # DataAccess
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
    
    function now() {
      var n = new Date();
      return n.getTime();
    }
    
    return {
      getData: function() { 
        return getStoredData(); 
      },
      incrementLeft: function() { 
        var d = getStoredData();
        d.left.push(now());
        updateStoredData(d);
      },
      incrementRight: function() {
        var d = getStoredData();
        d.right.push(now());
        updateStoredData(d);
      },
      resetData: function() {
        updateStoredData(zeroData);
      }
    };
  }])
;
