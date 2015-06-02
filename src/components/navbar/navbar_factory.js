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

      factory.save =  function(name, value, success) {
        var bookingParams = {
          name: value,
          car_id: factory.carId(),
        }
        console.log(name, value, factory.carId());

        var newBooking = new BookingService(bookingParams);
        if (success) {
          console.log(success, 'is true')
          newBooking.$save().then(_saveDidComplete);
        }
        else {
          console.log(success)
          newBooking.$save();
        }
      }

      factory.carId = function() {
        return $stateParams.car.id;
      }

      factory._saveDidComplete = function(data) {
        $state.go('bookingsShow', {bookingId: 4242});
      }
    return factory
  })
