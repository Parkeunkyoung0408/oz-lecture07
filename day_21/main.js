// console.log("main.js");

// import {title as prinTitle, print} from "./printer.js";
// const title = "CodePrinter";
// print(printTitle);

// import * as printer from "./printer.js";
// print(printer.title);
// console.log(printer);

//파일의 대표 하나 가져오기 
import printer from "./printer.js";
printer.print(printer.title);

const count = 3;
console.log(printer.title, count);