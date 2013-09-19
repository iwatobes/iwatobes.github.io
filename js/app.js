define([
  // Standard Libs
  'Console'      // lib/console/console
  , 'jQuery'     // lib/jquery/jquery
  , 'Underscore' // lib/underscore/underscore
  , 'Angular'    // lib/angular/angular

  // Application Files
  , 'services/services'
  , 'directives/directives'
  , 'filters/filters'
  , 'controllers/controllers'
], function (Console, $, _, angular, services, directives, filters, controllers) {
  "use strict";

  var initialize = function () {
    console.log("Starting application.");
    console.log("Services: ", services);
    console.log("Widgets: ", directives);
    console.log("Filters: ", filters);
    console.log("Controllers: ", controllers);

    var mainModule = angular.module('myApp',['ngResource']);
    services.initialize(mainModule);
    directives.initialize(mainModule);
    filters.initialize(mainModule);
    controllers.initialize(mainModule);

    angular.bootstrap(window.document,['myApp']);
    console.log
  };

  return {
    initialize: initialize
  };
});
