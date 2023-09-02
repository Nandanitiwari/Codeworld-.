// 1: convert to JSON => done
// 2: add data in another file 
// 3: readfile
// 4: again convert back to js obj original
// 5: console.log


const fs = require("fs")
const biodata = {
    name: "nannu",
    age: 26,
    course: "b.tech",
}


// obj to JSON
const jsonData = JSON.stringify(biodata);//{"name":"nannu","age":26,"course":"b.tech"}
fs.writeFile('json1.json', jsonData, (error) => {
    console.log("done");

})

fs.readFile("json1.json", "utf-8", (error,data)=>{
    const objData = JSON.parse(data);  //JSON to obj  //{ name: 'nannu', age: 26, course: 'b.tech' }
    console.log(data);  //{"name":"nannu","age":26,"course":"b.tech"}
  console.log(objData);  //{ name: 'nannu', age: 26, course: 'b.tech' }
})




