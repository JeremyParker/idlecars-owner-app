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

  iit('can cancel the booking', function() {
    login.loginProcess();
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
    // browser.pause()
  });

  it('for an approved driver', function() {
    login.loginProcess('booking');
    navbar.menuButton.click();
    navbar.rentalButton.click();
    expect(rental.noBookingContent.getText()).toContain('No bookings');
    rental.findCarButton.click();
    listing.delorean.click();
    carDetail.bookingLink.click();
    navbar.menuButton.click();
    navbar.rentalButton.click();
    expect(rental.status.getText()).toContain('RESERVE');
    rental.payButton.click();
    expect(rental.status.getText()).toContain('PICK UP');
    browser.pause()

  });
});
