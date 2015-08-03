'use strict';

var AppNotifications = function() {
  this.errorMessage = element.all(by.repeater('message in messages')).first();
};

module.exports = new AppNotifications();
