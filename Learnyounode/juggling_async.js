var http = require("http");
var bl = require("bl");
var index = 2;

var urls_queue = function(url, callback){
	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			if(err){
				console.error("An Error Occured:" + err)
			}
			console.log(data.toString());
		}));
		response.on("end", function(data){
			callback();
		});
	});
}


var http_call = function(){
	if (index < process.argv.length){
		urls_queue(process.argv[index], http_call);
		++index;
	}
}

http_call();