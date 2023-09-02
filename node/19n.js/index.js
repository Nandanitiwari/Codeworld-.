//the http.createServer() method dincludes requesdt and response parameters which is supplied by node.js.

//the request object can be used to get information about the current HTTP request 
//es.g., url ,request header, and data.

//the response object can be used to send a response for a current HTTP request.

//if the response from the HTTP server is supposed to be displayed as HTML.
//you should include an HTTP header woth the correct content type.

const http = require("http");

const server = http.createServer((req, res) => { 
  res.end("hello from the others sides");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no. 8000");
});