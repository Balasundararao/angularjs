'use strict';

// View1 App Code... 
angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',  
    //templateUrl: '/c/r/dce_sitearea/index/homepage.html',
    controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl', [function() {
}]);

// View2 App Code..
angular.module('myApp.other', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/briefcase', {
    templateUrl: 'views/briefcase.html',  
    //templateUrl: '/c/r/dce_sitearea/index/briefcasepage.html',
    controller: 'BriefcaseCtrl'
  });
}])
.controller('BriefcaseCtrl', [function() {
}]);

angular.module('myApp.hubs', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hubs/:hubsname/:catname/:pagename*', {
    templateUrl: function(urlattr){
        return '/c/r/salesconnect/saleshubs/' + urlattr.hubsname +'/'+ urlattr.catname +'/'+ urlattr.pagename + '.html';
    },
    controller: 'HubsCtrl'
  });
}])
.controller('HubsCtrl', [function() {
}]);


angular.module('myApp.version.interpolate-filter', [])
.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

angular.module('myApp.version.version-directive', [])
.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);


angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])
.value('version', '0.1');