HTML_DIR = './html/';
MODULE_DIR = './lib/node_modules/';
REDIS_HOST = '127.0.0.1';
REDIS_PORT = '6379';

var fs = require('fs');
var http = require('http');
var redis = require(MODULE_DIR + 'redis');

var redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
var server_port = process.argv[2];
var duck_status_key = "-duck-status";

function handleApiCall(location, new_status, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  if(new_status != "YES" && new_status != "NO") {
    redis_client.get(location + duck_status_key, function (err, reply) {
      if(reply != null)
        response.end(reply);
      else
        response.end("UNKNOWN");
    });
  }
  
  else {
    redis_client.set(location + duck_status_key, new_status, redis.print);
    console.log("Are the ducks out? " + new_status + ".");
    response.end("Duck status updated. Are the ducks out? " + new_status + ".");
  }
}

var requestListener = function(request, response) {
  if(request.url.toUpperCase().indexOf("/API/") !== -1) {
    api_call = request.url.toUpperCase().split("/");
    handleApiCall(api_call[2], api_call[4], response);
  }
  else {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end(fs.readFileSync(HTML_DIR + 'index.html'));
  }
}

var http_server = http.createServer(requestListener).listen(server_port);