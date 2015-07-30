'use strict';

angular.module('idlecars')
.directive('formatTel', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var needToFormat = attrs.formatTel == 'true';

      element[0].onkeypress = function (event) {
        if (needToFormat) {
          event.preventDefault();
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
            if (value.length < 14) { value += numberPressed };
            element[0].value = value;
          };
        };
      }
    }
  };
});
