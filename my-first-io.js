const pathFile = process.argv[2];

// validate
if(!pathFile) process.exit(-1);

const fs = require("fs");

// console.log(process.argv);

const objBuffredFile = fs.readFileSync(pathFile);

const str = objBuffredFile.toString();

// console.log(objBuffredFile.toString().split("\n"));


const arrFile = objBuffredFile.toString().split("\n");
console.log(arrFile.length -1);