'use strict';

describe('Owner has a car', function () {
  var cars = require('../cars/cars.po');
  var detail = require('../cars/detail.po');
  var navbar = require('../components/navbar.po');
  var fields = require('../templates/fields.po');
  var login = require('../auth/login.po');
  var helpers = require('../spec_helper');

  beforeEach(function () {
    helpers.startTest();
    login.setToken('owner_has_two_cars');
  });

  describe('can go to detail page', function () {

    it('from deep linking', function () {
      browser.get('http://localhost:3001/#/cars/2');
      expect(detail.name.getText()).toContain('Xtravaganza');
    });

    it('from cars page', function () {
      browser.get('http://localhost:3001/#/');
      cars.Xtravaganza.click();
      expect(detail.name.getText()).toContain('Xtravaganza');
    })
  })

  describe('in detail page', function () {

    beforeEach(function () {
      browser.get('http://localhost:3001/#/cars/2');
    });

    it('can update weekly rent', function () {
      expect(detail.rent.getText()).toEqual('500')
      detail.rent.click();

      fields.rent.clear();
      fields.rent.sendKeys('400');
      navbar.saveButton.click();
      expect(detail.rent.getText()).toEqual('400');
    })

    it('can delete the car', function () {
      detail.deleteButton.click();
      expect(cars.cars.count()).toBe(1);
    })
  })
})
