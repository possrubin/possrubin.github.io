(function() {
    var app = angular.module('app', []);
    app.controller('PageController', function() {
        this.page = 1;
        this.contents = pages;
        this.menus = titles;

        this.setPage = function(value) {
            if(Number.isInteger(value)) {
                this.page = value;
            }
        }

        this.isPage = function(value) {
            return this.page === value;
        } 
    });

    var titles = [
        {
            title: '호호'
        },
        {
            title: '하하'
        },
        {   
            title: '히히힣'
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

