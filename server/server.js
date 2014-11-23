var http = require("http");
http.createServer(function (request, response) {
      response.writeHead(200, {
         'Content-Type': 'text/plain'
      });
      response.write('BH on OpsWorks - version 3.0')
      response.end();
}).listen(80);
