'use strict';

describe('Renewing a car', function () {
  var helpers = require('../spec_helper');
  var renewal = require('../cars/renewal.po');

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/#/cars/1/renewals/faketoken');

  });

  it('show success message', function() {
    expect(renewal.message.getText()).toBe('Your listing is active.');
  });
});