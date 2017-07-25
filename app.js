(function(){
    'use strict';

    angular.module('myFirstApp',[])

    .controller('myFirstController',function($scope){
        $scope.name ="vimal";
        $scope.sayHello = function(){
            return "Hello vimal";
        };

    });
})();