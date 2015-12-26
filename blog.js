(function() {
    var app = angular.module('blog', []);
    app.controller('BoardController', function() {
        this.pages = boards;
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

