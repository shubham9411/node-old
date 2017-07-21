'use strict';

var util = require('util'),
url = require('url'),
http = require('http'),
qs = require('querystring'),
formidable = require("formidable");

exports.test = function(req, res) {
	var form = new formidable.IncomingForm();

    /*form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.write(fields);
        res.end();
    });*/
    //console.log(req.headers.name);
	res.write('hello');
    res.end();
};