'use strict';

describe('index page', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    // page = require('./show.po');
  });

  iit('has a navbar', function() {
    var navbar = element(by.css('bar-wrapper'));
    expect(navbar.isPresent()).toBe(true);
  });
});
