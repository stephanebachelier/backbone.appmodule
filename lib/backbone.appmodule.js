'use strict';

var AppModule = function (options) {
  this.options = options;
  this.initialize(options);
};

AppModule.prototype = {
  // Initialize is an empty function by default. Override it with your own
  // initialization logic which can be used to register
  // application routes
  initialize: function (options) {
    if (options && options.autoStart || this.autoStart) {
      this.start();
    }
  },

  // start module
  start: function (callback) {
    if (this.app) {
      // return current app if it has already been started
      return this.app;
    }

    this.app = this._startApp();

    if (callback && 'function' === typeof(callback)) {
      callback();
    }
    return this.app;
  },

  // stop is an empty function by default.
  // to handle all the logic to close the module
  stop: function () {},

  // _startApp is an empty function by default.
  // a private method to start the application
  _startApp: function () {}
};

// copy Backbone extend to ease module setup
AppModule.extend = Backbone.Model.extend;
