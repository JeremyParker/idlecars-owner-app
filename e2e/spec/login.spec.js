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
    expect(cars.title.getText()).toContain('My cars');
  });

  it('unsuccessfully', function() {
    login.loginProcess('9876543211');
    expect(notice.message.getText()).toContain('Sorry, that didn\'t work.');
  });
});
