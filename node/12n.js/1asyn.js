// 1. create a folder name thapa
// 2. create a file in it named read.txt add data into it
// 3. add more data into file without overriding the existing data 
// 4. read the data without getting the buffer data at first 
// 5. rename the file name to mybio.txt 
// 6. now delete both the file and folder 

const { error } = require("console");
const fs = require("fs");
//2.FILE CREATION
// fs.writeFile("read.txt", "today is awesome day :) ", 
// (error) => {
//     console.log("file is created");
//     console.log(error);

// });

// 3.ADDING DATA WITHOUT DELETING EXISTING DATA
// fs.appendFile("read.txt", "appending data", (error)=>{
//     console.log("data appended");
//     console.log(error);

// });

// 4. read the data without getting the buffer data at first 
fs.readFile("read.txt", "utf-8", (error ,data) => {
    console.log(data);
})