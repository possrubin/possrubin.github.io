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

    app.controller('BoardController', function($scope, $http) {
        this.test = "test1";
        $http.get('blogdata.json').success(function(blogdata) {
            $scope.pages = blogdata;
            test = "test!!";
        }); 
    });
  
    app.controller('BlogController', function($http, $routeParams) {
        this.route = $routeParams.boardId;
        $http.get('blogdata.json').success(function(blogdata) {
            this.page = blogdata[parseInt(this.route)];
        }); 
    });
})();

