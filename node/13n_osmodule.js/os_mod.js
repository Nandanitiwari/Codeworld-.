const os = require("os");
console.log(os.arch());
// const freeMemory = os.freemem();
console.log(os.freemem());  //memory rest in system show value in bytes
console.log(`${os.freemem() /1024 /1024/ 1024 }`); //show value in GB
console.log(`${os.totalmem() /1024 /1024/ 1024 }`) //total memory in system
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());