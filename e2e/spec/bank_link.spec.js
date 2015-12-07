'use strict';

describe('Owner can submit bank info', function () {
  var bankForm = require('../owner/bank_link.po');
  var navbar = require('../components/navbar.po');
  var fields = require('../templates/fields.po');
  var login = require('../auth/login.po');
  var account = require('../owner/account.po')
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    login.setToken('owner_has_two_cars');
  });

  iit('from account page', function () {
    browser.get('http://localhost:3001/#/account');
    expect(account.bankLink.getText()).toEqual('Add now');
    account.bankLink.click();

    // Note: we don't populate firstName, lastName or email because they're
    // already populated from the Owner object.
    bankForm.dateOfBirth.sendKeys('12121990');

    bankForm.streetAddress.sendKeys('white house');
    bankForm.locality.sendKeys('1600 Pennsylvania Ave NW');
    bankForm.region.sendKeys('Washington');
    bankForm.postalCode.sendKeys('20500');

    bankForm.routingNumber.sendKeys('071101307');
    bankForm.accountNumber.sendKeys('1123581321');

    bankForm.tos.click();
    bankForm.submitButton.click();
    bankForm.okButton.click();

    // TODO: this should go back to account page;
    // expect(account.bankLink.getText()).toEqual('Pending');
  })

})
