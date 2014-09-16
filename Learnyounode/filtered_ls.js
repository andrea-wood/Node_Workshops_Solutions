var fs = require("fs");
var path =  require("path");
fs.readdir(process.argv[2],function(err, files){
	if(err){ throw err; }
	for(var i = 0; i < files.length; i++){  // or forEach...
		if(path.extname(files[i]).substring(1) == process.argv[3]){
			console.log(files[i]);
		}
	}
});