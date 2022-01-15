
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = '';
  $scope.message = '';

  // $scope.numberitems = function () {
  //     var itemstring = $scope.name
  //     var lunchItems = itemstring.split(",")
  //     return length.lunchItems
  //   };

    $scope.statement = function () {
      if ($scope.name.split(",")==0) {
        return   $scope.message = "Please enter data first!"
      }
      else if ($scope.name.split(",").length>3) {
        return   $scope.message ="Too much!"
      }
      else if (0<$scope.name.split(",").length<4) {
        return   $scope.message ="Enjoy!"
      }

    };

}

})();
