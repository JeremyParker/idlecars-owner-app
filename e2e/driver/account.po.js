'use strict';

var Account = function() {
  this.userInfo = element.all(by.repeater('item in accountInfo'));
  this.firstName = element.all(by.repeater('item in accountInfo')).get(0);
  this.lastName = element.all(by.repeater('item in accountInfo')).get(1);
  this.email = element.all(by.repeater('item in accountInfo')).get(2);

  this.smsButton = element.all(by.css('on-off-button'));

  this.documents = element.all(by.repeater('item in driverDocuments'));
  this.driverLicense = element.all(by.repeater('item in driverDocuments')).get(0);
  this.FHVLicense = element.all(by.repeater('item in driverDocuments')).get(1);
  this.defensiveDriving = element.all(by.repeater('item in driverDocuments')).get(2);
  this.proofOfAddress = element.all(by.repeater('item in driverDocuments')).get(3);

  this.logoutButton = element(by.css('.button'));
};

module.exports = new Account();
