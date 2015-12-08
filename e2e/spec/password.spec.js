'use strict';

describe('password', function () {
  var notice = require('../components/app_notifications.po');
  var navbar = require('../components/navbar.po');
  var cars = require('../cars/cars.po');
  var login = require('../auth/login.po');
  var fields = require('../templates/fields.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
  });

  it('was forgot', function() {
    browser.get('http://localhost:3001/#/login');
    login.forgotButton.click();
    fields.phone.sendKeys('9876543210');
    navbar.nextButton.click();
    expect(notice.message.getText()).toContain('A text message has been sent.');
    notice.message.click();
  });

  it('can be changed', function() {
    login.setToken('owner_has_two_cars');
    browser.get('http://localhost:3001/#/change_password');
    fields.instructionButton.click();
    expect(notice.message.getText()).toContain('A text message has been sent.');
    notice.message.click();
  });
});
