/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  
  app.import('bower_components/Ionicons/css/ionicons.css');
  app.import('bower_components/foundation/js/vendor/modernizr.js');
  app.import('bower_components/foundation/css/foundation.css');
  app.import('bower_components/foundation/js/vendor/jquery.js');
  app.import('bower_components/foundation/js/vendor/fastclick.js');
  app.import('bower_components/foundation/js/foundation.min.js');
  app.import('vendor/foundation-init.js');
  app.import('bower_components/css-modal/build/modal.css');
  app.import('bower_components/css-modal/build/modal-gallery.css');
  app.import('bower_components/css-modal/build/modal-maxwidth.css');
  app.import('bower_components/css-modal/build/modal-resize.css');
  app.import('bower_components/css-modal/build/modal-spinner.css');
  app.import('bower_components/css-modal/build/modal-stretch.css');
  
//  app.import('vendor/gmaps.js');
  return app.toTree();
};
