(function() {
    var app = angular.module('app', []);
    app.controller('PageController', function() {
        this.page = 1;
        this.contents = pages;

        this.setPage = function(value) {
            this.page = value;
        }

        this.isPage = function(value) {
            return this.page === value;
        } 
    });

    var menus = [
        {
            title: '호호'
        }
    ];


    var pages = [
        {
            title: '헬로',
            description: 'ㅇㅇㅇㅇㅇ'
        },
        {
            title: '테스트',
            description: 'dfjlkasdfajlkdljks'
        },
        {
            title: '하이',
            description: ''
        }
    ];
})();

