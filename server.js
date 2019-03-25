var http = require('http');


var server= http.createServer(function onRequest(req, res){
  res.write("Hello World");
  res.end();
})

server.listen(5000);
