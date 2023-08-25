//asynchronous 

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

// 4. read the data 
fs.readFile("read.txt", "utf-8", (error ,data) => {
    console.log(data);
})