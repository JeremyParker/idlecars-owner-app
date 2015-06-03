angular.module('idlecars')
  .factory('navbarFunction', function ($location, $state, $stateParams, $previousState, BookingService) {
    var factory = {}
      factory._popState = function() {
        var popped = factory._prevOrDefault();
        $state.go(popped.state, popped.params).then(function() {
          $previousState.forget();
        });
      }

      factory._prevOrDefault = function() {
        return $previousState.get() || {state: 'cars'};
      }

      factory._isAtRoot = function() {
        var currentPath = $location.path();
        return currentPath === '/';
      }

      factory.save =  function(driverInfo) {
        var bookingParams = {
          user_account: driverInfo,
          car_id: $stateParams.car.id,
        }

        var newBooking = new BookingService(bookingParams);
        newBooking.$save().then(factory._saveDidComplete());
      }

      factory._saveDidComplete = function(data) {
        $state.go('bookingsShow', {bookingId: 4242});
      }
    return factory
  })
