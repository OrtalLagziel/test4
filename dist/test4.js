/**
 * test4
 * @version v0.0.1 - 2016-07-11
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('templates-test4', ['test4.html']);

angular.module("test4.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("test4.html",
    "<span>Hello {{name}}</span>\n" +
    "");
}]);

angular.module('test4module', ['templates-test4', 'pascalprecht.translate' ])
.config(["$translateProvider", function($translateProvider) {
    'use strict';

    $translateProvider
        .preferredLanguage('en_US')
        .useSanitizeValueStrategy('escape')
        .translations('en_US', {
            'test4': {
                'name': {
                    'first': 'Luke'
                }
            }
        })
        .useMissingTranslationHandlerLog();
    }])
  .directive('test4', ["$translate", function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
    };
    controller.$inject = ["$scope", "$element"];

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
  }]);
