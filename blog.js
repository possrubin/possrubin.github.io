(function() {
    var app = angular.module('app', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider.
        when('/blog/:filename', {
            templateUrl: "blogdesc.html",
            controller: 'BlogController',
            controllerAs: 'blogdesc'
        }).
        otherwise({
            redirectTo: '/'
        });
    });

    app.controller('BoardController', function($http) {
        $http.get('blogdata.json').success(function(blogdata) {
            this.pages = blogdata;
        }.bind(this)); 
    });
  
    app.controller('BlogController', function($http, $routeParams) {
        this.filename = $routeParams.filename;
        alert(this.filename);
    });
})();

