'use strict';

describe('The car index page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./index.po');
  });

  it('includes a header', function() {
    expect(page.header.getText()).toBe('Listings');
  });

  it('lists 2 cars', function () {
    expect(page.carEls.count()).toBe(2);
  });

});
