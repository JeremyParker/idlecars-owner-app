'use strict';

angular.module('idlecars')
.service('mapService', function(){

  this.map = {
    center: {
      latitude: 0,
      longitude: 0
    },
    zoom: 11,
    control: {},
    options: {
      scrollwheel: false,
      mapTypeControlOptions: {
        style:google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
    }
  };

  this.marker = {
    id: 0,
    coords: {
      latitude: 0,
      longitude: 0
    },
    options:{
      icon: {
        url: '/assets/images/location.png',
        anchor: new google.maps.Point(7.5, 7.5)
      }
    }
  };

  this.circle = {
    center: {
      latitude: 0,
      longitude: 0
    },
    radius: 1500,
    stroke: {
      color: '#08B21F',
      weight: 2,
      opacity: 1
    },
    fill: {
      color: '#08B21F',
      opacity: 0.5
    }
  };

  this.car = {
    center: {
      latitude: 0,
      longitude: 0
    }
  };
});
