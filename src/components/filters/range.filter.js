'use strict';

angular.module('icFilters')

.filter('attrInRange', function() {
  return function(items, attrKey, min, max) {
    if (!items) { return []; }

    return items.filter(function(item) {
      return item[attrKey] >= min && item[attrKey] < max;
    });
  }
})

.filter('attrFilter', function() {
  var _anyFiltersOn = function(attrs) {
    for (var key in attrs) {
      if (attrs[key]) { return true; }
    }
  }

  return function(items, attrs) {
    console.log(attrs)
    if (!items) { return items; }
    if (!attrs) { return items; }
    if (!_anyFiltersOn(attrs)) { return items; }

    var matches = [];
    for (var i in items) {
      for (var key in items[i]) {
        if (items[i][key] && attrs[key]) {
          matches.push(items[i])
        }
      }
    }

    return matches;
  }
})
;
