console.log("this is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

//1 and 2
// module.exports = average;
   
//3
// module.exports = {
//     avg : average,
//     name : "nannu",
//     repo : "github",
// }

//4
module.exports.name = "nannu";
