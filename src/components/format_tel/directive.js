'use strict';

angular.module('idlecars')
.directive('formatTel', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var needToFormat = attrs.formatTel == 'true';

      element[0].onkeydown = function (event) {
        if (!needToFormat) { return; }

        var value = element[0].value;
        var numberPressed = (event.which-48).toString();

        if (event.which > 47 && event.which < 58) {

          switch (value.length) {
            case 0:
              value += '(';
              break;
            case 4:
              value += ')-';
              break;
            case 9:
              value += '-';
              break;
          }
        }
        else if (event.which === 8) {
          switch (value.length) {
            case 2:
              value = value.substring(0,value.length-1);
              break;
            case 7:
              value = value.substring(0,value.length-2);
              break;
            case 11:
              value = value.substring(0,value.length-1);
              break;
          }
        }
        element[0].value = value;
      }

      element[0].onkeypress = function () {
        if (!needToFormat) { return; }
        if (event.which < 48 || event.which > 57) {
          event.preventDefault();
        }
      }
    }
  };
});
