'use strict';

/**
 * @ngdoc overview
 * @name leftOrRightApp
 * @description
 * # leftOrRightApp
 *
 * Main module of the application.
 */
angular
  .module('leftOrRightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('lor');
  }]) 
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function ($scope) {
    $scope.pages = [
      { title: 'Experiment', id: '',        isSelected: true },
      { title: 'Results',    id: 'results', isSelected: false },
      { title: 'About',      id: 'about',   isSelected: false },
      { title: 'Contact',    id: 'contact', isSelected: false }
    ];
    $scope.selectPage = function(i) {
      $scope.pages.forEach(function(page) {
        page.isSelected = false;
      });
      $scope.pages[i].isSelected = true;
    };
    $scope.selectPage(0);
  });
