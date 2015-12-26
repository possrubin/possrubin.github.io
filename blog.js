(function() {
    var app = angular.module('blog', ['ngRoute']);
    app.controller('BoardController', function($routeParams) {
        this.pages = boards;
        this.route = $routeParams.first;
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

