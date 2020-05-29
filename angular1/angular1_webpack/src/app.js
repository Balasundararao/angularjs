// 'use strict';
// // Declare app level module which depends on views, and components
// var app = angular.module('myApp', [
//   'ngRoute',
//   'myApp.home',
//   'myApp.other',
//   'myApp.hubs',
//   'myApp.version',
//   'ngRoute',
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/home'});
// }])
// .run(function ($templateCache) {
//     $templateCache.put("home.html", require("./views/home.html"));
//     $templateCache.put("header.html", require("./views/header.html"));
//     $templateCache.put("footer.html", require("./views/footer.html"));
//     $templateCache.put("briefcase.html", require("./views/briefcase.html"));
// });

(function (angular) {
  "use strict";
  angular
    .module("ngRouteExample", ["ngRoute"])

    .controller("MainController", function (
      $scope,
      $route,
      $routeParams,
      $location
    ) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
    })

    .controller("BookController", function ($scope, $routeParams) {
      $scope.name = "BookController";
      $scope.params = $routeParams;
    })

    .controller("ChapterController", function ($scope, $routeParams) {
      $scope.name = "ChapterController";
      $scope.params = $routeParams;
    })

    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when("/Book/:bookId", {
          templateUrl: "book.html",
          controller: "BookController",
          resolve: {
            // I will cause a 1 second delay
            delay: function ($q, $timeout) {
              var delay = $q.defer();
              $timeout(delay.resolve, 1000);
              return delay.promise;
            },
          },
        })
        .when("/Book/:bookId/ch/:chapterId", {
          templateUrl: "chapter.html",
          controller: "ChapterController",
        });

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
    });
})(window.angular);
