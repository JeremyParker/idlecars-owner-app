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
  });

  it('can see upload docs state', function() {
    browser.get('http://localhost:3000/#/login');
    login.loginProcess('1234567892');
    navbar.menuButton.click();
    navbar.rentalButton.click();

    expect(rental.circles.count()).toBe(4);
    rental.upLoadButton.click();

    expect(uploadDocs.uploadTitle.getText()).toContain('Driver');
  });

  it('can cancel a booking', function() {
    login.setToken('without_docs_approved');
    browser.get('http://localhost:3000/#/account/bookings');
    rental.cancelButton.click();

    expect(popup.title.getText()).toContain('Confirm');
    popup.dismissButton.click();

    expect(popup.title.isDisplayed()).toBeFalsy();
    rental.cancelButton.click();
    popup.confirmButton.click();

    expect(rental.noBookingContent.getText()).toContain('No bookings')
  });

  it('can reserve a car', function() {
    login.setToken('without_booking');
    browser.get('http://localhost:3000/#/account/bookings');

    expect(rental.noBookingContent.getText()).toContain('No bookings');
    rental.findCarButton.click();

    listing.delorean.click();
    carDetail.bookingLink.click();

    expect(navbar.menuButton.isDisplayed()).toBeTruthy();
    browser.get('http://localhost:3000/#/account/bookings');

    expect(rental.status.getText()).toContain('Reserve');
  });

  it('can finish booking', function() {
    login.setToken('insurance_approved');
    browser.get('http://localhost:3000/#/account/bookings');

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
