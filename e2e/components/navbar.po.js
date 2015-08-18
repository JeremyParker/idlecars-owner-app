'use strict';

var Navbar = function() {
  this.navbar = element(by.css('.bar-wrapper'));
  this.menuButton = element(by.css('div.right-button'));
  this.nextButton = element(by.cssContainingText('button', 'Next'));
  this.saveButton = element(by.cssContainingText('button', 'Save'));
  this.backButton = element(by.css('.prev-pointer'));
  this.homeButton = element(by.cssContainingText('a', 'Home'));
  this.signupButton = element(by.cssContainingText('a', 'Sign up'));
  this.loginButton = element(by.cssContainingText('a', 'Log in'));
  this.questionsButton = element(by.cssContainingText('a', 'Questions'));
  this.accountButton = element(by.cssContainingText('a', 'My account'));
  this.rentalButton = element(by.cssContainingText('a', 'My rental'));
  this.title = element(by.css('.bar-wrapper h3'));
};

module.exports = new Navbar();
