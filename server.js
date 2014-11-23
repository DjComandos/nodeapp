var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ls -la", puts);
exec("echo 'npm -v':", puts);
exec("npm -v", puts);
exec("npm start", puts);