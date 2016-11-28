'use strict';

 //var json = require('json-update');
 //var fs = require('fs');
 //var fileName = '../../lib/bookedClasses.json';
 //var file = require(fileName);
 var repository = require('../../lib/classesRepository');
 var bookedClass;

 module.exports = {
   get: function contacts_get(req, res) {
    /*var className = repository.get(req.params['id']);
    var id = req.params['id'];
     bookedClass = {
       "id": id,
   		 "subject": className["subject"],
   		 "date": className["date"],
   		 "time": className["time"]
     }*/
     /*file.key = "hey";

     fs.writeFile(fileName, JSON.stringify(file), function (err) {
       if (err) return console.log(err);
       console.log(JSON.stringify(file));
       console.log('writing to ' + fileName);
     });*/
     /*json.update('../../lib/bookedClasses.json',bookedClasses)
     .then(function(dat) {
       console.log(dat.id);
     });*/
     res.json(repository.get(req.params['id']));
   }
 };
