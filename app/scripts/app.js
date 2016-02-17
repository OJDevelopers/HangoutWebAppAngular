'use strict';

/**
 * @ngdoc overview
 * @name hangoutWebAppAngularApp
 * @description
 * # hangoutWebAppAngularApp
 *
 * Main module of the application.
 */
angular
  .module('hangoutWebAppAngularApp', [
    'ngRoute','lumx'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

        .when('/crear', {
            templateUrl: 'views/crear.html'
        })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
