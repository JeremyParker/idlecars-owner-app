'use strict';

describe('Driver in account page', function () {
  var helpers = require('../spec_helper');
  var account = require('../driver/account.po');
  var login = require('../auth/login.po');

  beforeEach(function () {
    helpers.startTest();
  });

  it('can toggle the sms button', function() {
    login.setToken('without_docs');
    browser.get('http://localhost:3000/#/account');

    expect(account.smsButton.getText()).toContain('On');
    account.smsButton.click();
    expect(account.smsButton.getText()).toContain('Off');
  });
})
