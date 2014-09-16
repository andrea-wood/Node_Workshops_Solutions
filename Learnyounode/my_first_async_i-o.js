var new_lines = 0;
var fs = require("fs");
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err){ throw err; }
	var new_lines_array = data.toString().split("\n");
	var new_lines = new_lines_array.length;
	console.log(new_lines-1);
});
