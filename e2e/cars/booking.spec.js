'use strict';

describe('Getting to a car booking page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/cars/1');
    var show = require('./show.po');
    show.bookingLink.click();
  });

  it('creates a booking', function() {
    page = require('./booking.po');
    page.emailInput.sendKeys('ebrown@deloreanfans.net');

    page.nextButton.click();

    page = require('./booking.po');
    page.firstNameInput.sendKeys('emit');
    page.lastNameInput.sendKeys('brown');

    page.nextButton.click();

    page = require('./booking.po');
    page.phoneInput.sendKeys('1981981985');

    page.nextButton.click();

    page = require('./booking_show.po');
    expect(page.header.getText()).toBe('Success!');
  })
});
