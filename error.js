// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.ExtendableError = (function(superClass) {
    extend(ExtendableError, superClass);

    function ExtendableError(message, from) {
      if (message == null) {
        message = '';
      }
      this.from = from != null ? from : null;
      ExtendableError.__super__.constructor.call(this, message);
      Object.defineProperty(this, 'message', {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });
      Object.defineProperty(this, 'name', {
        configurable: true,
        enumerable: false,
        value: this.constructor.name,
        writable: true
      });
      if (Error.hasOwnProperty('captureStackTrace')) {
        Error.captureStackTrace(this, this.constructor);
        return;
      }
      Object.defineProperty(this, 'stack', {
        configurable: true,
        enumerable: false,
        value: (new Error(message)).stack,
        writable: true
      });
    }

    return ExtendableError;

  })(Error);

}).call(this);
