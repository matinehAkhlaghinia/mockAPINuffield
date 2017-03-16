'use strict';


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
    post: function book_class(req, res) {
      var classesInfo = [];
      classesInfo.push({classId: '1'});
      res.json(classInfo);
      // var classInfo = {};
      // var connection = new Connection(config);
      // connection.on('connect', function(err) {
      //     // If no error, then good to proceed.
      //     console.log("Connected");
      //     var request = new Request("UPDATE users SET bookedClasses="+ req.body.ClassId, function(err) {
      //     if (err) {
      //         console.log(err);}
      //     });
      //     // var result = "";
      //     // request.on('row', function(columns) {
      //     //     columns.forEach(function(column) {
      //     //       if (column.value === null) {
      //     //         console.log('NULL');
      //     //       } else {
      //     //         classInfo[column.metadata.colName] = column.value;
      //     //         result+= column.value + " ";
      //     //       }
      //     //     });
      //     //     console.log(result);
      //     //     classesInfo.push(classInfo);
      //     //     result ="";
      //     //});

      //     request.on('doneProc', function(rowCount, more) {
      //       res.json(classesInfo);
      //     });
      //     connection.execSql(request);
      // });
    }
};
