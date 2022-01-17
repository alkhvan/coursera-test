(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];
  function MsgController($scope, lovesFilter) {
    $scope.name = "Cookie Monster";
    $scope.stateOfBeing = "happy";

    $scope.sayMessage = function () {
      var msg = " likes to eat healthy snacks at night!";
      var res= $scope.name +msg;
      return res;
    };

    $scope.sayLovesMessage = function () {
      var msg = " likes to eat healthy snacks at night!";
      msg = lovesFilter(msg)
      var res= $scope.name +msg;
      return res;
    };

    $scope.feedCookieMonster = function () {
      $scope.stateOfBeing = "angry";
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    }
  }
function TruthFilter(){
  return function (input,target,replace){
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}
})();
