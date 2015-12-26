(function() {
    var app = angular.module('blog', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider.
        when('/blog/:boardId', {
            templateUrl: blogdesc.html,
            controller: 'BlogController'
        }).
        otherwise({
            redirectTo: '/'
        });
    });

    app.controller('BoardController', function() {
        this.pages = boards;
    });
  
    app.controller('BlogController', function($routeParams) {
        this.route = $routeParams.boardId;
        this.page = boards[parseInt(this.route)];
    });

    var boards = [
        {
            title : "This is First Blog!",
            description : "Nothing to write"
        },
        {
            title : "This is Second Blog!",
            description : "Oh Second~"
        }
    ];
})();

