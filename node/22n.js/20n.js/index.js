//routing

const http = require("http");
const { type } = require("os");

const server = http.createServer((req, res) => { 
    // console.log(req.url);
if(req.url == "/"){
    res.end("hello from the others sides");
}
else if(req.url == "/about"){
    res.end("hello from the about us sides");
}
else if(req.url == "/contact"){
    res.end("hello from the contact us sides");
}
else{
    res.writeHead(404, {"Content-type": "text/html"});
    res.end("<h1>404 error. page does'nt exist</h1>");
}
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no. 8000");
});