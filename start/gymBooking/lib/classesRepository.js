'use strict';

var classes = require('./classes.json');
var bookedClasses = require('./bookedClasses.json');
var jp = require('jsonpath');

module.exports = {
  get: function (id) {
    return jp.query(classes, '$..[?(@.id=='+id+')]'); //????
  },
  all: function () {
    return classes;
  },
  booked: function() {
    return bookedClasses;
  }
};
