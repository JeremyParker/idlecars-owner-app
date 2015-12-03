'use strict';

var AppNotifications = function() {
  this.message = element.all(by.repeater('message in messages')).first();
};

module.exports = new AppNotifications();
