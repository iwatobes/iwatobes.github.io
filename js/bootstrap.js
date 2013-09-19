"use strict";

require.config({
  paths: {
    Console:      'libs/console/console'
    , jQuery:     'libs/jquery/jquery'//'http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min'
    , Underscore: 'libs/underscore/underscore'
    , Angular:    'libs/angular/angular'
    , templates:  './../templates'
  }
  , priority: [
    "Console"
    , "jQuery"
    , "Underscore"
    , "Angular"
  ]
  , urlArgs: 'v=1.0'
});

require([
  // Standard Libs
  'require'
  , 'Console'
  , 'jQuery'
  , 'Underscore'
  , 'Angular'
], function (require, Console, $, _, angular) {
  console.log("Bootstrap dependencies loaded. Starting bootstrap.");
  require(['app'], function (App) {
    console.log("App: ", App);
    App.initialize();
  });
});
