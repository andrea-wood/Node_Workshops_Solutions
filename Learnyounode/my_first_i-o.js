var new_lines = 0;
var fs = require("fs");
var buf = fs.readFileSync(process.argv[2]);
var new_lines_array = buf.toString().split("\n");
new_lines = new_lines_array.length;
console.log(new_lines-1);