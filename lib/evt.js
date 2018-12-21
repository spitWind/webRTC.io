function createEvent() {
  var constraints = {
    on: function (eventName, callback) {
      this._events[eventName] = this._events[eventName] || [];
      this._events[eventName].push(callback);
    },
    /**
     * @type {{[key:string]:Function[]}}
     */
    _events: {

    },
    fire: function (eventName, _) {
      var events = this._events[eventName];
      var args = Array.prototype.slice.call(arguments, 1);

      if (!events) {
        return;
      }

      for (var i = 0, len = events.length; i < len; i++) {
        events[i].apply(null, args);
      }
    }
  }
  return constraints
}
module.exports = { createEvent }