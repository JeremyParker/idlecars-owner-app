'use strict';

describe('Getting to a car detail page from the car index', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    var index = require('./index.po');
    index.delorean.click();

    page = require('./show.po');
  });

  it('includes a header', function() {
    expect(page.header.getText()).toBe('1985 DMC Delorean');
  });
});

describe('Deep linking to a car detail page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/#/cars/1');
    page = require('./show.po');
  });

  it('includes a header', function() {
    expect(page.header.getText()).toBe('1985 DMC Delorean');
  });
});
