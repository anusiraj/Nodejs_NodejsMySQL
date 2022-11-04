var http = require('http'); //require()-to include the http(builtin) module
var dt = require('./myfirstmodule'); //bring custom module
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //header if response is displayed as html with correct content type
//   res.write("The date and time are currently: " + dt.myDateTime());
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
//   res.end();
  res.end(txt);
//   fs.open('mynewfile.txt', 'w', function(err,file) { //create/open an empty file
    fs.writeFile('mynewfile.txt', 'Hello Content', function(err) { //write to an empty file
    if (err) throw err;
    console.log('filecreated/saved!');
  });
}).listen(8081);