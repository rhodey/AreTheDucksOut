HTML_DIR = './html/';
MODULE_DIR = './lib/node_modules/';
REDIS_HOST = '127.0.0.1';
REDIS_PORT = '6379';

var fs = require('fs');
var http = require('http');
var redis = require(MODULE_DIR + 'redis');

var redis_client = redis.createClient(REDIS_PORT, REDIS_HOST);
var server_port = process.argv[2];

function handleApiCall(location, attribute, value, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // No location specified direct to API reference.
  if(location == null || location == "") {
    response.end("API reference: https://github.com/rhodey/AreTheDucksOut");
    return;
  }
  
  if(location == "authorize") {
    response.end(JSON.stringify({
      "verdict" : "granted",
      "comments" : "It is the position of the Fowl Intelligence Surveillance Act Court that we don't give a duck about fowl rights, go ahead." 
    }));
    return;
  }
  
  // Update the state of the ducks at location and return the new state.
  if(value != null && value != "" && attribute != null && attribute != "") {
    redis_client.get(location + '-key', function (err, saved_state) {
      new_state = {};
      if(saved_state != null)
        new_state = JSON.parse(saved_state);
      
      new_state[attribute] = value;
      redis_client.set(location + '-key', JSON.stringify(new_state), redis.print);
      console.log("state of ducks at " + location + ": " + JSON.stringify(new_state));
      response.end(JSON.stringify(new_state));
    });
  }
  
  // Return everything known about the state of the ducks at location.
  else {
    redis_client.get(location + '-key', function (err, saved_state) {
      if(saved_state != null)
        response.end(saved_state);
      else {
        redis_client.set(location + '-key', JSON.stringify({"outside" : "unknown"}), redis.print);
        response.end(JSON.stringify({"outside" : "unknown"}));
      }
    });
  }
}

var requestListener = function(request, response) {
  if(request.url.toLowerCase().substr(0, 4) == "/api") {
    api_call = request.url.toLowerCase().split("/");
    handleApiCall(api_call[2], api_call[3], api_call[4], response);
  }
  else if(request.url == "/terrorist_duck.jpg") {
    response.writeHead(200, {'Content-type': 'image/jpeg'});
    response.end(fs.readFileSync(HTML_DIR + 'terrorist_duck.jpg'));
  }
  else {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end(fs.readFileSync(HTML_DIR + 'index.html'));
  }
}

var http_server = http.createServer(requestListener).listen(server_port);