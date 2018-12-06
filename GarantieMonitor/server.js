'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

    var q = url.parse(req.url, true);
    console.log(q.pathname);
    
}).listen(port);
