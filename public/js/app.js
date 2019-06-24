
angular.module("myApp", [])

var app = angular.module("myApp", ["ngRoute", "firebase"]);

app.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/navbar.html'
    }
});

app.directive('footsie', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/footer.html'
    }
});



app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
        })
        .when("/about", {
            templateUrl: "about.html",
        })
        .when("/game", {
            templateUrl: "game.html",
        })
        .when("/easteregg", {
            templateUrl: "easteregg.html",
        })
        .otherwise({
            redirectTo: '/home'
        })
        
});