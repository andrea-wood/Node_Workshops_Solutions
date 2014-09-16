var fs = require("fs");
var path =  require("path");
module.exports =  function(dirname, extname, callback) {
	fs.readdir(dirname,function(err, files){
		var result = [];
		if(err){ return callback(err); }
		for(var i = 0; i < files.length; i++){  // or forEach...
			if(path.extname(files[i]).substring(1) == extname){
				result.push(files[i])
			}
		}
		return callback(null, result);
	});
};


