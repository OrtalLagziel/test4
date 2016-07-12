angular.module('test4module', ['templates-test4', 'pascalprecht.translate' ])
  .directive('test4', function($translate ) {
    'use strict';
//dd
    var controller = function ($scope, $element) {
      $scope.name = "ortal"
    };
    return {
      restrict: 'EAC',
      scope: {
        name: '<'
      },
      templateUrl: 'test4.html',
      controller: controller,

      link: function(scope, element, attr, ctrl) {
      }
    };
  });
