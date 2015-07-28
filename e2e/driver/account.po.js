'use strict';

var Account = function() {
  this.firstName = element(by.cssContainingText('.content-title', 'First Name'));
  this.lastName = element(by.cssContainingText('.content-title', 'Last Name'));
  this.email = element(by.cssContainingText('.content-title', 'Email'));
};

module.exports = new Account();
