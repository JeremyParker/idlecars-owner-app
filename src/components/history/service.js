angular.module('idlecars')
.factory('HistoryService', function ($rootScope, $state) {
  var history = {};
  var states = [];
  var skipStates = ['cars.detail.renewal'];
  var goBackTriggered = false;

  var _prevOrDefault = function() {
    return states[states.length - 2] || {state: 'cars'};
  };

  var _isSkipState = function (state) {
    for (var i = 0; i < skipStates.length; i++) {
      if (skipStates[i] == state) {
        return true;
      }
    };
    return false;
  }

  history.listen = function () {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (goBackTriggered) {
        states.pop();
        goBackTriggered = false;
      }
      else if (!_isSkipState(toState.name)) {
        var state = {state: toState.name, params: toParams}
        states.push(state);
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
