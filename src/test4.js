angular.module('test4module', ['templates-test4', 'pascalprecht.translate' ])
.config(function($translateProvider) {
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
    })
  .directive('test4', function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
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