console.log('Loading the Index.js file');
var angular = require('angular');
var app = angular.module('myApp', ['ngRoute']);

require('./homepage')(app);
require('./briefcasepage')(app);
require('./hubspage')(app);


app.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.when('/',                                 {templateUrl: 'views/home.html',                     controller: 'HomeCtrl'})
        $routeProvider.when('/briefcase',                        {templateUrl: 'views/briefcase.html',                     controller: 'BriefcaseCtrl'})        
        $routeProvider.when('/hubs/:hubsname/:catname/:pagename*', {
            templateUrl: function(urlattr){
                return '/c/r/salesconnect/saleshubs/' + urlattr.hubsname + urlattr.catname + urlattr.pagename + '.html';
            },
            controller: 'HubsCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);

console.log( app );


/** 
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.other',
  'myApp.hubs',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


*/
