'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (q.pathname === "/" || q.pathname === "" || q.pathname === "/favicon.ico") {
        console.log("q is not correct")
    } else {
        var path = "./HTML" + q.pathname;
        console.log(path);

        var fileContents = readFile(path);
        if (fileContents == undefined) {
            console.log("file contents of " + path + "undefined");
            res.write(readFile("./HTML/PageNotFound404.html").toString);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            console.log(fileContents);
            res.write(fileContents);
            res.end();
        }

        function readFile(path) {
            console.log("reading file " + path);
            fs.readFile(path, 'utf8', function (err, fileContents) {
                if (err) {
                    console.log("An error occured while loading \'" + path + "\': ");
                    throw err;
                } else if (fileContents) {
                    console.log(fileContents);
                    return fileContents.toString();
                }
                console.log("finished trying to load HTML file from " + path);
                return undefined;
            });
        }

    }
}).listen(port);