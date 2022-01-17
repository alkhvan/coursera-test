(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope','$filter'];
function MsgController($scope,$filter) {
  $scope.name = "Yaakov";
  $scope.cookieCost= 100;

$scope.stateOfBeing = "angry";

  $scope.sayMessage = function () {
    var msg = "Who is here the pretty little monster?"
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.showImages = function () {
   $scope.stateOfBeing = "happy";
 };
}

})();
