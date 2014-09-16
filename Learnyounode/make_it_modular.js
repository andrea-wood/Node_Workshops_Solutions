var my_module = require("./my_module_filter.js");
var dirname = process.argv[2];
var extname = process.argv[3];
var callback = function(err, data){
	if(err){ console.error("An Error Occured:" + err); }
	data.forEach(function(el, i){
		console.log(el);
	});
}
my_module(dirname, extname, callback);