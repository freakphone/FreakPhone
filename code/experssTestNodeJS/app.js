/**
 * Created by djemi on 25.03.15
 */

/*
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Zeki\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/

// tree things to do in node application
//configure your app
//use middleware
//define route

var express = require('express');
var app = express();
app.get('/', function(req, resp){
    resp.send("Hello Zeki");
});

app.listen(1337, function(){
 console.log("ready on port 1337");
});