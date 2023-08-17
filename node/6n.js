// Synchronous or blocking-
// -Line by line execution

// Asynchronous or nonblocking
// line by line execution not guranteed
// -callbacks will fire


const fs =require("fs");
let text = fs.readFile("dele.txt", "utf-8", (error, data)=>{
    console.log(error, data);
    console.log(data);
});
console.log("this is a message");