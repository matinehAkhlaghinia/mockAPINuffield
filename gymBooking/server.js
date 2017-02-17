 'use strict';

 var port = process.env.PORT || 8000; // first change

 var http = require('http');
 var express = require('express');
 var bodyParser = require('body-parser');
 var swaggerize = require('swaggerize-express');
 var swaggerUi = require('swaggerize-ui'); // second change
 var path = require('path');
 var Connection = require('tedious').Connection;
 var app = express();



 var config = {  
    userName: 'matin',  
    password: 'A123456*',  
    server: 'nuffielddb.database.windows.net',    
    options: {encrypt: true, database: 'nuffield'}  // If you are on Microsoft Azure, you need this
 };
   
 var connection = new Connection(config);  
 connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
 });


 var server = http.createServer(app); 

 app.use(bodyParser.json());

 app.use(swaggerize({
     api: path.resolve('./config/api.json'), // third change
     handlers: path.resolve('./handlers'),
     docspath: '/swagger' // fourth change
 }));

 // change four
 app.use('/docs', swaggerUi({
   docs: '/swagger'  
 }));

 server.listen(port, function () { // fifth and final change
 });