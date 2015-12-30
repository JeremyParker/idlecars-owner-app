'use strict';

describe('CTA buttons should work:', function () {
  var detail = require('../cars/detail.po');
  var navbar = require('../components/navbar.po');
  var login = require('../auth/login.po');
  var helpers = require('../spec_helper');

  describe('Approved owners can', function () {
    beforeEach(function () {
      helpers.startTest();
      login.setToken('owner_has_bank_link');
    });

    it('remove list and relist ', function () {
      browser.get('http://localhost:3001/#/cars/1');
      expect(detail.status.getText()).toContain('Listed');
      expect(detail.ctaButtons.count()).toBe(1);
      detail.firstCtaButton.click();

      navbar.saveButton.click();
      expect(detail.status.getText()).toContain('Not listed');
      detail.firstCtaButton.click();

      navbar.saveButton.click();
      expect(detail.status.getText()).toContain('Listed');
    });

    it('extend listing', function () {
      browser.get('http://localhost:3001/#/cars/4');
      expect(detail.status.getText()).toEqual('Listing expired.');
      detail.firstCtaButton.click();
      expect(detail.status.getText()).toContain('Listed.');
    });
  });

  describe('For a requested booking, owners can', function () {
    beforeEach(function () {
      helpers.startTest();
      login.setToken('owner_has_requested_booking');
    });

    it('approve driver\'s insurance', function () {
      browser.get('http://localhost:3001/#/cars/5');
      detail.firstCtaButton.click();
      expect(detail.status.getText()).toContain('The driver will contact you to arrange pickup.');
    });

    it('reject driver\'s insurance', function () {
      browser.get('http://localhost:3001/#/cars/5');
      detail.secondCtaButton.click();
      expect(detail.status.getText()).toContain('Listed. This listing expires');
    });

    it('reject driver\'s insurance', function () {
      browser.get('http://localhost:3001/#/cars/5');
      detail.thirdCtaButon.click();
      navbar.saveButton.click();
      expect(detail.status.getText()).toContain('Not listed.');
    });
  })
})
