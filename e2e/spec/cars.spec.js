'use strict';

describe('As an owner', function () {
  var cars = require('../cars/cars.po');
  var navbar = require('../components/navbar.po');
  var fields = require('../templates/fields.po');
  var login = require('../auth/login.po');
  var helpers = require('../spec_helper');

  describe('who has bank link', function () {

    beforeEach(function () {
      helpers.startTest();
      login.setToken('owner_has_bank_link');
    });

    it('see my cars button on onboarding success page', function () {
      browser.get('http://localhost:3001/#/cars/add/1/success');
      expect(cars.cars.count()).toBe(0);
    });
  })

  describe('who has no car', function () {

    beforeEach(function () {
      helpers.startTest();
      login.setToken('owner_has_no_car')
      browser.get('http://localhost:3001/#/');
    });

    it('can add a car', function () {
      expect(cars.cars.count()).toBe(0);
      cars.addCarButton.click();

      fields.plate.sendKeys('TLC');
      navbar.nextButton.click();
      fields.declineCarButton.click();

      fields.plate.sendKeys('TLC');
      navbar.nextButton.click();

      fields.confirmCarButton.click();
      navbar.nextButton.click();

      fields.rent.sendKeys('500');
      navbar.nextButton.click();

      fields.deposit.sendKeys('100');
      navbar.nextButton.click();

      navbar.nextButton.click();
      expect(navbar.title.getText()).toEqual('Minimum rental');

      navbar.nextButton.click();
      expect(navbar.title.getText()).toEqual('Exterior color');

      navbar.nextButton.click();
      expect(navbar.title.getText()).toEqual('Interior color');

      navbar.nextButton.click();
      expect(navbar.title.getText()).toEqual('Success');

      fields.bankLinkButton.click();
      expect(navbar.title.getText()).toEqual('Link Bank Account');
    })
  })
})
