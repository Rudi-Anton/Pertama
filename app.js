// angular.module('app', [])
// .controller('appcontroller', function($scope){
//     $scope.Day14={}
//     $scope.Day14.ucapan="Selamat Datang di Angularjs fullan"
// })
//deklarasi myapp sebagai angular modul dan routing
let myapp=angular.module('App',['ngRoute']);
//config untuk routing
myapp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        controller:'pelangganController',
        templateUrl:'./views/pelanggan.html'
    })
    .when('/pelanggan',{
        controller:'pelangganController',
        templateUrl:'./views/pelanggan.html'
    })
    .otherwise({
        redirectTo:'/'
    });
}]);