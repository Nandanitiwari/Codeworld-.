const path = require('path');
console.log(path.dirname('C:/Users/tiwar/OneDrive/Documents/Desktop/internship/node/14n_pathmodule.js/path.js'));
console.log(path.extname('C:/Users/tiwar/OneDrive/Documents/Desktop/internship/node/14n_pathmodule.js/path.js'));
console.log(path.extname('C:/Users/tiwar/OneDrive/Documents/Desktop/internship/node/14n_pathmodule.js/path.js'));
console.log(path.basename('C:/Users/tiwar/OneDrive/Documents/Desktop/internship/node/14n_pathmodule.js/path.js'));
//for all above values

// console.log(path.parse('C:/Users/tiwar/OneDrive/Documents/Desktop/internship/node/14n_pathmodule.js/path.js'));
const mypath = path.parse('C:/Users/tiwar/OneDrive/Documents/Desktop/internship/node/14n_pathmodule.js/path.js');
console.log(mypath.name);
console.log(mypath.root);
