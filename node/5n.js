//synchronous
const fs = require("fs");
let text = fs.readFileSync("Dele.txt", "utf-8");
text = text.replace("browserr" , "rohan");
console.log("the content of the file is ");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("rohan.txt", text);