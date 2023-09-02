//JSON
//javascript object notation.  JSON is a lightweight format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.

const biodata = {
    name: "nannu",
    age: 26,
    course: "b.tech",
}

console.log(biodata.course);

// obj to JSON
const jsonData = JSON.stringify(biodata);//{"name":"nannu","age":26,"course":"b.tech"}
console.log(jsonData);
// console.log(jsonData.course);// this is undefined


//JSON to obj
const objData = JSON.parse(jsonData);//{ name: 'nannu', age: 26, course: 'b.tech' }
console.log(objData);
console.log(objData.course);
