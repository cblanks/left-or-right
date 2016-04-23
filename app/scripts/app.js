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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
      { title: 'Home',    id: '',        isSelected: true },
      { title: 'About',   id: 'about',   isSelected: false },
      { title: 'Contact', id: 'contact', isSelected: false }
    ];
    $scope.selectPage = function(i) {
      $scope.pages.forEach(function(page) {
        page.isSelected = false;
      });
      $scope.pages[i].isSelected = true;
    };
  });
