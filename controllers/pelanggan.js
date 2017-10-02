//deklarasi apppelanggan sebagai angular modul dari app
let apppelanggan=angular.module('App');
//pelanggan controller dengan nama pelanggan controller mempunyai callback scrope http location routeparams
apppelanggan.controller('pelangganController', [ '$scope','$http','$location','$routeParams', function($scope,$http,$location,$routeParams){
        console.log('berjalan');
        $scope.getpelanggan=function(){
            $http.get('http://localhost:8889/api/alirankungfu').then(function(data){
                //debugger;
                $scope.pelanggans=data.data;
               //debugger;
            });
        }
        $scope.getpelangganById=function(){
            //untuk menampung parameter id yang dihasilkan
            let id=$routeParams.id;
            $http.get('http://localhost:8889/api/alirankungfu/'+id).success(function(data){
                $scope.pelangganById=data;
            })
        }
    }]);
