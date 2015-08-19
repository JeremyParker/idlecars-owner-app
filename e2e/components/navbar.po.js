'use strict';

var Navbar = function() {
  this.navbar = element(by.css('.bar-wrapper'));
  this.menuButton = element(by.css('div.right-button'));
  this.nextButton = element(by.cssContainingText('button', 'Next'));
  this.saveButton = element(by.cssContainingText('button', 'Save'));
  this.backButton = element(by.css('.prev-pointer'));
  this.homeButton = element(by.cssContainingText('.menu', 'Home'));
  this.signupButton = element(by.cssContainingText('.menu', 'Sign up'));
  this.loginButton = element(by.cssContainingText('.menu', 'Log in'));
  this.questionsButton = element(by.cssContainingText('.menu', 'Questions'));
  this.accountButton = element(by.cssContainingText('.menu', 'My account'));
  this.rentalButton = element(by.cssContainingText('.menu', 'My rental'));
  this.title = element(by.css('.bar-wrapper h3'));
};

module.exports = new Navbar();
