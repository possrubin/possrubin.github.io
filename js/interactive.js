(function() {
    var app = angular.module('app', []);
    app.controller('MenuController', function() {
        this.menu = 1;
        this.contents = pages;

        this.setMenu = function(value) {
            this.menu = value;
        }

        this.isMenu = function(value) {
            return this.menu === value;
        } 
    });


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

