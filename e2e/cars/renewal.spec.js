'use strict';

describe('Renewing a car', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/cars/1/renewals/faketoken');
    page = require('./renewal.po');
  });

  it('show success message', function() {
    expect(page.message.getText()).toBe('Your listing is active.');
  });
});
