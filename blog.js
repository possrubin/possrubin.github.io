(function() {
    var app = angular.module('blog', []);
    app.controller('BoardController', function() {
        this.page = board;
    });

    var board = {
        title : "This is First Blog!",
        desription : "Nothing to write"
    };
})();

