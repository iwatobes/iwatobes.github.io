define([
  // Standard Libs
  'Console'      // lib/console/console
  , 'Underscore' // lib/underscore/underscore

  // routing
  , 'routes/routes'

  // Application Controller
  , 'controllers/AppController'
  , 'controllers/HomeController'
  , 'controllers/DataController'

], function (Console, _, routes, app, home,data) {
  "use strict";
  console.log("Entering controllers module.");
  console.log("AppController", app);

  var controllers = {
    home: home,
    data: data
  };


  var setUpRoutes = function(angModule) {
    // hook up routing
    console.log( 'Initializing navigation and routing.' );
    angModule.config(function($routeProvider){
      _.each(routes, function(value, key) {
        console.log("Adding ", key, ":", value);
        $routeProvider.when(
          value.route
          , {
            template: value.template
            , controller: value.controller
            , title: value.title
          }
        );
      });
      $routeProvider.otherwise({ redirectTo: routes.home.route });
    });
    angModule.run(function($rootScope){
      $rootScope.$on('$routeChangeSuccess',function (next,last) {
        console.log("Navigating from ", last);
        console.log("Navigating to   ", next);
      });
    });
  }

  var initialize = function(angModule) {
    angModule.controller('AppController', app);
    _.each(controllers,function(controller,name){
      angModule.controller(name, controller);
    })
    setUpRoutes(angModule);
    console.log("Registered Controllers: ", controllers);
  };
  return {
    initialize: initialize
  };
});
