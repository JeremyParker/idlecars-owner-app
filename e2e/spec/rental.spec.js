'use strict';

describe('Driver in rental page', function () {
  var helpers = require('../spec_helper');
  var navbar = require('../components/navbar.po');
  var login = require('../auth/login.po');
  var listing = require('../cars/list.po');
  var carDetail = require('../cars/detail.po');
  var rental = require('../driver/rental.po');
  var uploadDocs = require('../driver/uploadDocs.po');
  var popup = require(('../components/popup.po'));

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/#/');
    navbar.menuButton.click();
    navbar.loginButton.click();
  });

  it('can cancel a booking with step 2', function() {
    login.loginProcess('1234567892');
    navbar.menuButton.click();
    navbar.rentalButton.click();
    expect(rental.circles.count()).toBe(4);
    rental.upLoadButton.click();
    expect(uploadDocs.uploadTitle.getText()).toContain('Driver');
    uploadDocs.skipButton.click();
    navbar.menuButton.click();
    navbar.rentalButton.click();
    rental.cancelButton.click();
    expect(popup.title.getText()).toContain('Confirm');
    popup.dismissButton.click();
    expect(popup.title.isDisplayed()).toBeFalsy();
    rental.cancelButton.click();
    popup.confirmButton.click();
    expect(rental.noBookingContent.getText()).toContain('No bookings')
  });

  it('can reserve a car with step 1', function() {
    login.loginProcess('1234567891');
    navbar.menuButton.click();
    navbar.rentalButton.click();
    expect(rental.noBookingContent.getText()).toContain('No bookings');
    rental.findCarButton.click();
    listing.delorean.click();
    carDetail.bookingLink.click();
    navbar.menuButton.click();
    navbar.rentalButton.click();
    expect(rental.status.getText()).toContain('Reserve');
  });

  it('can finish booking with step 4', function() {
    login.loginProcess('1234567894');
    navbar.menuButton.click();
    navbar.rentalButton.click();
    expect(rental.status.getText()).toContain('Pick up');
    rental.pickupButton.click();
    rental.payButton.click();
    expect(rental.successTitle.isDisplayed()).toBeTruthy();
    rental.okButton.click();
    expect(rental.inProgressTitle.isDisplayed()).toBeTruthy();
    rental.carDetailAnchor.click();
    expect(carDetail.header.getText()).toContain('Benz');
  });
});
