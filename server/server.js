var http = require("http");

exports.start = function() {
  http.createServer(function (request, response) {
        response.writeHead(200, {
           'Content-Type': 'text/plain'
        });
        response.write('BH on OpsWorks - version 5.1')
        response.end();
  }).listen(80);
}
