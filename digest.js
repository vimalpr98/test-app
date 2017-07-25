(function(){
    'use strict';
    angular.module('CounterApp',[])
    .controller('CounterController',CounterController);
    CounterController.$inject= [$scope];
    function CounterController($scope){
    $scope.onceCounter =0;
    $scope.counter =0;

        $scope.showNumberOfWatcher = function(){
        console.log("# of watcher: ",$scope.$$watchersCount);
        };
        $scope.countOnce = function(){
            $scope.onceCounter = 1;

        };

        $scope.$watch('onceCounter', function(newValue, oldValue){
        console.log("Once Counter old value:",oldValue);
        console.log("Once Counter old value:",newValue);    
         });

       $scope.$watch('Counter', function(newValue, oldValue){
        console.log("Counter old value:",oldValue);
        console.log("Counter old value:",newValue);    
         });
       }
})()