define([
  // Standard Libs
  'Console'    // lib/console/console
  , 'routes/routes'
], function (Console,routes) {
  "use strict";

  var appController = ['$scope',function ($scope) {
    console.log("AppController entered");
    $scope.navigation = routes; 
  }];

  return appController;
});
