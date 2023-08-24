// synchronous
const fs = require("fs");
const text = fs.readFileSync("Dele.txt", "utf-8");
console.log("the content of the file is ");
console.log(text);
