'use strict';

describe('user can log in', function () {
  var notice = require('../components/app_notifications.po');
  var cars = require('../cars/cars.po');
  var login = require('../auth/login.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3001/#/login');
  });

  it('successfully', function() {
    login.loginProcess('9876543210');
    expect(cars.addCarButton.isDisplayed()).toBe(true);
  });

  // it('unsuccessfully', function() {
  //   // TODO: this is a a protractor issue. looks like we need to wait until sendKeys' done
  //   login.loginProcess('1231231234');
  //   expect(notice.message.getText()).toContain('Sorry, that didn\'t work.');
  // });
});
