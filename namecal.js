(function(){
    'use strict';
    angular.module('NameCalculator',[])
    .controller('NameControllerController',function($scope)
    {
$scope.name="";
$scope.totalvalue=0;
$scope.displaynumeric = function(){
    var totalNameValue =calculateNumericForString($scope.name);
    $scope.totalvalue = totalNameValue;
};
function calculateNumericForString(string){
    var totalStringValue = 0;
    for(var i=0;i<string.length; i++){
        totalStringValue += string.charCodeAt(i);

    }
    return totalStringValue;
}
    } );
})();