'use strict';

describe('Getting to a car booking page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    var index = require('./index.po');
    index.carEls.get(0).click();

    // TODO(jefk): figure out how to deep link this page
    var show = require('./show.po');
    show.bookingLink.click();

    page = require('./booking.po');
  });

  xit('includes a header', function() {
    expect(page.header.getText()).toMatch(/^Request/);
  });
});
