app = angular
    .module('cvDexter', ['ngRoute','ngMaterial' ])
    .config(function ($routeProvider) {
    $routeProvider       
    .when('/', {
        templateUrl: 'views/page.html',
        controller: 'PageController',
        controllerAs: 'ctr'
      })
        .when('/old', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'ctr'
      })
     .when('/Error', {
        templateUrl: 'views/error.html',
        controller: 'ErrorController',
        controllerAs: 'ctr'
      })
    .otherwise({
        redirectTo: '/'
      });
  }); 