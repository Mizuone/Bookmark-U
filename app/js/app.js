var app = angular.module('BookmarkU', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/app/views/vabookmarkitem.html",
        controller: 'HomeController'
    })
    .when("/angular", {
        templateUrl: "/app/views/angular.html",
        controller: 'HomeController'
    })
    .when("/ionic", {
        templateUrl: "/app/views/ionic.html",
        controller: 'HomeController'
    })
    .when("/reading", {
        templateUrl: "/app/views/reading.html",
        controller: 'HomeController'
    })
    .when("/programming", {
        templateUrl: "/app/views/programming.html",
        controller: 'HomeController'
    })
    .when("/custom", {
        templateUrl: "/app/views/custom.html",
        controller: 'HomeController'
    })
    .when("/editbookmark/:id", {
        templateUrl: "/app/views/editbookmark.html",
        controller: 'Editbookmark'
    })
    .when("/addbookmark", {
        templateUrl: "/app/views/addbookmark.html",
        controller: 'Addbookmark'
    })
    .otherwise({
        redirectTo: "/"
    }) 
})