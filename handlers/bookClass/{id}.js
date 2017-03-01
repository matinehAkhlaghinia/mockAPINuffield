'use strict';

 var repository = require('../../lib/classesRepository');
 var bookedClass;

 module.exports = {
   get: function bookClassById(req, res) {
     res.json(repository.get(req.params['id']));
   }
 };
