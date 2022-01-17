(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];
  function MsgController($scope, lovesFilter) {
    $scope.name = "Cookie Monster";
    $scope.stateOfBeing = "happy";

    $scope.sayMessage = function () {
      var msg = name + "likes to eat healthy snacks at night!";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = name+ "likes to eat healthy snacks at night!";
      msg = lovesFilter(msg)
      return msg;
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
})();
