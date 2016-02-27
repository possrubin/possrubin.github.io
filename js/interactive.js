(function() {
    var app = angular.module('app', []);
    app.controller('PageController', function() {
        this.propage = 1;
        this.andpage = 0;
        this.promenus = profile_menus;
        this.procontents = profile_contents;
        this.andmenus = android_menus;
        this.andcontents = android_contents;
        
        this.setProPage = function(value) {
            this.propage = value;
            this.andpage = 0;
        }

        this.isProPage = function(value) {
            return this.propage === value;
        }

        this.setAndPage = function(value) {
            this.propage = 0;
            this.andpage = value;
        }

        this.isAndPage = function(value) {
            return this.andpage === value;
        } 
    });

    var profile_menus = [
        {
            title: '프로필'
        },
        {
            title: '공란'
        }
    ];

    var profile_contents = [
        {
            title: '프로필',
            description: '하하하'
        },
        {
            title: '공란',
            description: '흐흥음'
        }
    ];

    var android_menus = [
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

