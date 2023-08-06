console.log("this is tutorial 7");

function greet(name, greentext="Greetings from javascript"){
    let name1= "name1";// it is a local variable, this name does not affect the global variable name
    console.log(greentext + " " + name );
    console.log(name + " is a good boy");
}

// this are global variable name
let name = "Harry";
let name1 = "shubham";
let name2= "rohan";
let name3 = "sagar";
let greentext = "Good Morning";
greet(name, greentext);
greet(name1, greentext);
greet(name2, greentext);
greet(name3);

function sum(a,b,c){
    let d = a + b + c;
    return d;
    //this line will never execute(unreachable code)
    //console.log("function is returned");
}
let returnval = sum(1,2,3);
console.log(returnval);