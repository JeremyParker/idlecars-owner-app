'use strict';

var Rental = function() {
  var self = this;

  self.circles = element.all(by.repeater('i in stepsArray'));
  self.status = element(by.css('.booking-header .bold'));
  self.carName = element(by.css('section h2'));
  self.noBookingContent = element(by.css('.no-booking p'));
  self.findCarButton = element(by.cssContainingText('a', 'Search'));
  self.upLoadButton = element(by.cssContainingText('button', 'Upload'));
  self.cancelButton = element(by.cssContainingText('button', 'Cancel'));
  self.carDetailAnchor = element(by.cssContainingText('a', 'details'));
  self.changeDateButton = element(by.cssContainingText('button', 'Change'));
  self.pickupButton = element(by.cssContainingText('button', 'Pick'));
  self.payButton = element(by.cssContainingText('button', 'Pay'));
  self.okButton = element(by.cssContainingText('button', 'OK'));
  self.phoneButton = element(by.cssContainingText('button', 'Yes'));

  self.successTitle = element(by.cssContainingText('h3', 'Success'));
  self.inProgressTitle = element(by.cssContainingText('.bold', 'RENTAL'));

  self.cancelTitle = element(by.css('.popup-container h3'));
  self.cancelDismissButton = element(by.cssContainingText('button', 'No'));
  self.cancelConfirmButton = element(by.cssContainingText('button', 'Yes'));
};

module.exports = new Rental();
