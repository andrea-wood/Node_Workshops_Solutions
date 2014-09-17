var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function(response){

	// FIRST APPROACHE
/*	var body = "";
	response.setEncoding("utf8");
	response.on("data", function(data){
		 body += data;
	});
	response.on("end", function(data){
		 console.log(body.length); // nb of characters
		 console.log(body); // complete string
	});
	response.on("error", function(e){
		console.error(e);
	});*/

	// SECOND APPROACHE

	response.pipe(bl(function(err, data){
		if(err){
			console.error("An Error Occured: " + err);
		}
		var response = data.toString();
		console.log(response.length); // nb of characters
		console.log(response); // complete string
	}));
});