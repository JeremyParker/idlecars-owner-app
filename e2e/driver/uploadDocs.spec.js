'use strict';

describe('As a driver, I can upload my docs', function () {
  var path = require('path');
  var carDetail = require('../cars/detail.po');
  var navbar = require('../navbar/navbar.po');
  var signup = require('../auth/signup.po');
  var uploadDocs = require('./uploadDocs.po');
  var helpers = require('../spec_helper');

  var oldUrl = 'http://localhost:3000/#/account/onboarding/driver-license';

  var browserWait = function () {
    browser.wait(function() {
      return browser.getCurrentUrl().then(function (currentUrl) {
        var equality = oldUrl !== currentUrl;
        oldUrl = currentUrl;
        return equality;
      })
    })
  }

  beforeEach(function () {
    helpers.startTest();
    browser.get('http://localhost:3000/#/cars/1');
    carDetail.bookingLink.click();
  });

  it('with booking a car', function() {
    var fileToUpload = '../../src/assets/images/Mark_Check.png';
    var absolutePath = path.resolve(__dirname, fileToUpload);

    signup.signupProcess();
    expect(navbar.title.getText()).toEqual('Email');

    uploadDocs.email.sendKeys('test@gmail.com');
    navbar.nextButton.click();

    expect(uploadDocs.progressBar.isDisplayed()).toBe(true);

    expect(uploadDocs.uploadTitle.getText()).toContain('Driver');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(uploadDocs.uploadTitle.getText()).toContain('Hack');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(uploadDocs.uploadTitle.getText()).toContain('Defensive');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();

    expect(uploadDocs.uploadTitle.getText()).toContain('address');
    uploadDocs.uploadButton.sendKeys(absolutePath);
    browserWait();
  });
});
