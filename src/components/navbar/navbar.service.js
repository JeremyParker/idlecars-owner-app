'use strict';

angular.module('idlecars')
.service('navService', function(){

  this.labelPool = ['Your email address', 'What\'s your name?', 'Your phone number'];
  this.placeholderPool = ['Email address', 'First name', '(222)-555-1234'];
  this.typePool = ['email', 'text', 'tel'];
  this.namePool = ['email', 'name', 'phone'];

  this.index = 0;
})
