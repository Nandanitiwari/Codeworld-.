// REPL
// 1. js Expression
// 2. use variable
// 3. Multiline code
// 4. use (_) to get the last result
// 5. we can use editor mode 

const fs = require("fs");

//creating a file and add a data or just add a data
// fs.writeFileSync("read.txt", "this is synchronize code"); 


 //Adding more data on the existing file without override the existing data
//  fs.appendFileSync("read.txt", " . Adding more data on it");

//reading data from existing file --> it will show the buffer data (<Buffer 74 68 69 73 20 69 73 20 73 79 6e 63 68 72 6f 6e 69 7a 65 20 63 6f 64 65 20 20 2e 20 41 64 64 69 6e 67 20 6d 6f 72 65 20 64 61 74 61 20 6f 6e 20 69 74>)
//buf_data is a node.js data type
//(not available in browser js)
//Buffer is mainly used to store binary data
//while reading from a file or receiving packets over the network.

// const buf_data = fs.readFileSync("read.txt");  
// console.log(buf_data);

//for getting original data

// org_data = buf_data.toString();
// console.log(org_data);

//to rename the file
fs.renameSync("read.txt", "readwrite.txt");