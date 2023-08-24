// challange time 

// 1. create a folder name thapa
// 2. create a file in it named bio.txt add data into it
// 3. add more data into file without overriding the existing data 
// 4. read the data without getting the buffer data at first 
// 5. rename the file name to mybio.txt 
// 6. now delete both the file and folder 

const fs = require('fs');

//creating directory
// fs.mkdirSync("thapa");

//creating new file in thapa folder
// fs.writeFileSync("thapa/bio.txt", "creating new file in thapa folder ");

//add more data into file without overriding the existing data 
// fs.appendFileSync("thapa/bio.txt", "add more data into file without overriding the existing data ");

// 4. read the data without getting the buffer data at first 
// const buf_data = fs.readFileSync("thapa/bio.txt")
// org_data = buf_data.toString();
// console.log(org_data);

// 4. read the data without getting the buffer data at first 
//  const data = fs.readFileSync("thapa/bio.txt", "utf-8")
//  console.log(data);

// 5. rename the file name to mybio.txt 
// fs.renameSync("thapa/bio.txt" , "thapa/mybio.txt");

// 6. now delete both the file and folder 
fs.unlinkSync("thapa/mybio.txt");
