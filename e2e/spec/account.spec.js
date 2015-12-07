'use strict';

describe('In account page', function () {
  var navbar = require('../components/navbar.po');
  var fields = require('../templates/fields.po');
  var login = require('../auth/login.po');
  var account = require('../owner/account.po')
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    login.setToken('owner_has_two_cars');
    browser.get('http://localhost:3001/#/account');
  });

  it('can update first name', function () {
    expect(account.firstname.getText()).toEqual('Craig');
    account.firstname.click();

    fields.firstname.clear();
    fields.firstname.sendKeys('Marry');
    navbar.saveButton.click();
    expect(account.firstname.getText()).toEqual('Marry');
  });

  it('can update company name', function () {
    expect(account.company.getText()).toEqual('Test');
    account.company.click();

    fields.company.clear();
    fields.company.sendKeys('Idlecars');
    navbar.saveButton.click();
    expect(account.company.getText()).toEqual('Idlecars');
  });

  it('can toggle the sms button', function() {
    expect(account.smsButton.getText()).toContain('On');
    account.smsButton.click();
    expect(account.smsButton.getText()).toContain('Off');
  });

  it('can log out', function () {
    account.logoutButton.click();
    expect(navbar.title.getText()).toEqual('Sign up')
  })
})
