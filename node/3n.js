//synchronous 
const fs = require("fs");
const text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);