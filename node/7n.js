const http = require('http')
const fs = require('fs')
const filecontent = fs.readFileSync('demo.html')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'content-type':'text/html'});
    res.end(filecontent)
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Lisning on port 8000")
})