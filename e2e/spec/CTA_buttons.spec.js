'use strict';

describe('CTA buttons should work:', function () {
  var detail = require('../cars/detail.po');
  var navbar = require('../components/navbar.po');
  var login = require('../auth/login.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    login.setToken('owner_has_bank_link');
    browser.get('http://localhost:3001/#/cars/1');
  });

  it('remove list and relist ', function () {
    expect(detail.status.getText()).toContain('Listed');
    expect(detail.ctaButtons.count()).toBe(1);
    detail.firstCtaButton.click();

    navbar.saveButton.click();
    expect(detail.status.getText()).toContain('Not listed');
    detail.firstCtaButton.click();

    navbar.saveButton.click();
    expect(detail.status.getText()).toContain('Listed');
  });
})
