angular.module('idlecars')
.factory('HistoryService', function ($rootScope, $state) {
  var history = {};
  var states = [];
  var goBackTriggered = false;

  var _prevOrDefault = function() {
    return states[states.length - 2] || {state: 'cars'};
  }

  history.forget = function () {
    states.pop();
  }

  history.listen = function () {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      var stateName = toState.name;

      if (goBackTriggered) {
        states.pop();
        goBackTriggered = false;
      }
      else {
        states.push({state: stateName, params: toParams});
      };
    })
  }

  history.goPreviousState = function () {
    var destination =  _prevOrDefault();
    goBackTriggered = true;
    $state.go(destination.state, destination.params);
  }

  return history;
})
