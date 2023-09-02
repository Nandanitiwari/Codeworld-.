//module wrapper function
//all these modules have individualy scope of our file
(function (exports, require, module, _filename, _dirname){

const name = "nannu";//1 line 
console.log(name);//(2 line) when we write these 2 line of code nodemon wrape it in these function
module.exports = {fjljlskfsl};
});

//IIfe says
// in node.js the data we write is private bcs of IIFE
(function(){
    const a = "nannu";
    console.log(a);  //a these cannot access outside the block
})();