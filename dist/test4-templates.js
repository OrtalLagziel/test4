angular.module('templates-test4', ['test4.html']);

angular.module("test4.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("test4.html",
    "<span>Hello {{name}}</span>\n" +
    "");
}]);
