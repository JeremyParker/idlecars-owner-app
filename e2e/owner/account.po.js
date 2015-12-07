'use strict';

var Account = function() {
  var self = this;

  self.userInfo = element.all(by.repeater('item in userInfo'));
  self.firstname = self.userInfo.get(0).element(by.css('.content-main'));

  self.ownerInfo = element.all(by.repeater('item in ownerInfo'));
  self.company = self.ownerInfo.get(0).element(by.css('.content-main'));
  self.bankLink = self.ownerInfo.get(2).element(by.css('.content-main'));

  self.smsButton = element(by.css('on-off-button'));

  self.logoutButton = element(by.css('.alert-button'));
};

module.exports = new Account();
