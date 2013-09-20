'use strict';

angular.module('YeomanProjectApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Home.html',
        controller: 'MainCtrl'
      })
	  .when('/home', {
        templateUrl: 'views/Home.html',
        controller: 'MainCtrl'
      })
	  .when('/about', {
        templateUrl: 'views/About.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
