 'use strict';

 var repository = require('../../lib/classesRepository');

 module.exports = {
     get: function classes_getById(req, res) {
         res.json(repository.get(req.params['id']));
     }
 };
