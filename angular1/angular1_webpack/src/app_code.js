//'use strict';

// View1 App Code... 
angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    template: require('./views/home.html'),  
    controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl', function($scope) {
    $scope.name = 'Home Controller';
});

// View2 App Code..
angular.module('myApp.other', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/briefcase', {
    template: require('./views/briefcase.html'),  
    controller: 'BriefcaseCtrl'
  });
}])
.controller('BriefcaseCtrl', function($scope) {
  $scope.name="Briefcase Controller";
  
	$scope.developers = [
    {"name":"John", "family":"Doe"}, 
    {"name":"Anna", "family":"Smith"},
    {"name":"Peter", "family":"Jones"},
    {"name":"Alex", "family":"Volkov"}, 
    {"name":"Yaniv", "family":"Smith"},
]
});

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