// CHALLANGE

// 1. create a folder name thapa
// 2. create a file in it named bio.txt add data into it
// 3. add more data into file without overriding the existing data 
// 4. read the data without getting the buffer data at first 
// 5. rename the file name to mybio.txt 
// 6. now delete both the file and folder 

// 1. create a folder name thapa
// const { error } = require("console");
const fs = require ("fs");
// fs.mkdir("thapa", (err) => {
//     console.log("folder created");
// })

// 2. create a file in it named read.txt add data into it
fs.writeFile("thapa/bio.txt", "creating file", (error) =>{
    console.log("data added");
    console.log(error);
})

// 3. add more data into file without overriding the existing data 
// fs.appendFile("bio.txt", "  |  appending data", (error) => {
//     console.log("data appended");
//     console.log(error);
// })

// 4. read the data without getting the buffer data at first 
// fs.readFile("bio.txt", "utf-8", (error ,data) =>{
//     console.log(data);
//     console.log(error);
// })

// 5. rename the file name to mybio.txt 
// fs.rename("bio.txt", "mybio.txt",(data, error) => {
//     console.log("rename completed");
// })

// 6. now delete both the file and folder 
// fs.rmdir("thapa", (error,data) => {
//     console.log("folder/directory  deleted");
// })