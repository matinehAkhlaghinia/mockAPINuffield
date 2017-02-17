 'use strict';

var repository = require('../lib/classesRepository');
var Connection = require('tedious').Connection;



var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var config = {
   userName: 'matin',
   password: 'A123456*',
   server: 'nuffielddb.database.windows.net',
   options: {encrypt: true, database: 'nuffield'}  // If you are on Microsoft Azure, you need this
};

 module.exports = {
     get: function classes_get(req, res) {
       var classesInfo = [];
       var classInfo = {};
       var connection = new Connection(config);
       connection.on('connect', function(err) {
           // If no error, then good to proceed.
           console.log("Connected");
           var request = new Request("SELECT * FROM classes;", function(err) {
           if (err) {
               console.log(err);}
           });
           var result = "";
           request.on('row', function(columns) {
               columns.forEach(function(column) {
                 if (column.value === null) {
                   console.log('NULL');
                 } else {
                   classInfo[column.metadata.colName] = column.value;
                   result+= column.value + " ";
                 }
               });
               console.log(result);
               classesInfo.push(classInfo);
               result ="";
           });

           request.on('doneProc', function(rowCount, more) {
             res.json(classesInfo);
           });
           connection.execSql(request);
       });
     }
 };
