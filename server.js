HTML_DIR = './html/';
MODULE_DIR = './lib/node_modules/';
REDIS_HOST = '127.0.0.1';
REDIS_PORT = '6379';

var fs = require('fs');
var http = require('http');
var redis = require(MODULE_DIR + 'redis');

var redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
var server_port = process.argv[2];
var duck_status_key = "duck-status";

var requestListener = function(request, response) {
  switch(request.url) {
    case "/":
      response.writeHead(200, {'Content-type': 'text/html'});
      response.end(fs.readFileSync(HTML_DIR + 'index.html'));
      break;
      
    case "/api/status":
      redis_client.get(duck_status_key, function (err, reply) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        if(reply != null)
          response.end(reply);
        else
          response.end("UNKNOWN");
      });
      break;
      
    case "/api/status/in":
      redis_client.set(duck_status_key, "NO", redis.print);
      console.log("Ducks have been put inside.");
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end("I trust that you put the ducks inside.");
      break;
      
    case "/api/status/out":
      redis_client.set(duck_status_key, "YES", redis.print);
      console.log("Ducks have been let outside.");
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end("I trust that you let the ducks outside.");
      break;
      
    default:
      console.log("bad request: " + request.url);
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end("resource not found.");
  }
}

var http_server = http.createServer(requestListener).listen(server_port);