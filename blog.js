(function() {
    var app = angular.module('blog', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider.
        when('/blog/:boardId', {
            templateUrl: "blogdesc.html",
            controller: 'BlogController'
        }).
        otherwise({
            redirectTo: '/'
        });
    });

    app.controller('BoardController', function($http) {
        $http.get('blogdata.json').success(function(blogdata) {
            alert(blogdata[0].title);
            this.pages = blogdata;
        }); 
    });
  
    app.controller('BlogController', function($http, $routeParams) {
        this.route = $routeParams.boardId;
        $http.get('blogdata.json').success(function(blogdata) {
            this.page = blogdata[parseInt(this.route)];
        }); 
    });
})();

