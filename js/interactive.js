(function() {
    var app = angular.module('app', []);
    app.controller('PageController', function() {
        this.page = 1;
        this.contents = android_contents;
        this.menus = android_titles;

        this.setPage = function(value) {
            this.page = value;
        }

        this.isPage = function(value) {
            return this.page === value;
        } 
    });

    var profile_titles = [
    ];

    var profile_contents = [
    ];

    var android_titles = [
        {
            title: '네비게이션'
        },
        {
            title: '버튼'
        },
        {   
            title: '이미지'
        } 
    ];


    var android_contents = [
        {
            title: '네비게이션',
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

