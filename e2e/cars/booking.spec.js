'use strict';

describe('Getting to a car booking page', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    var index = require('./index.po');
    index.carEls.get(0).click();

    var show = require('./show.po');
    show.bookingLink.click();

    page = require('./booking.po');
  });

  // TODO(jefk): this test gets to the right page, but this spec times out
  // it('includes a header', function() {
  //   expect(page.header.getText()).toStartWith('Request');
  // });
});
