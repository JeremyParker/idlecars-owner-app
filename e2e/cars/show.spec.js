'use strict';

describe('Getting to a car detail page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    var index = require('./index.po');
    index.carEls.get(0).click();

    page = require('./show.po');
  });

  it('includes a header', function() {
    expect(page.header.getText()).toBe('Car detail');
  });
});
