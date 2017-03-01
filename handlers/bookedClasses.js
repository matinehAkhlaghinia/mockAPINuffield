'use strict';

var repository = require('../lib/classesRepository');

module.exports = {
    get: function bookedClasses(req, res) {
        res.json(repository.booked())
    }
};
