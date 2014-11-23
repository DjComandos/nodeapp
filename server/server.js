var http = require("http");

exports.start = function() {
  http.createServer(function (request, response) {
        response.writeHead(200, {
           'Content-Type': 'text/plain'
        });
        response.write('BH on OpsWorks - version 3.2')
        response.end();
  }).listen(80);
}
