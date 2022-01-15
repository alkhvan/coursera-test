(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Aleksandra";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
