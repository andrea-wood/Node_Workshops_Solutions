var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){
	if(req.method=="GET"){ 
		var obj = url.parse(req.url, true);
		var return_date = new Date(obj.query.iso);
		var data = {};
		if(obj.pathname=="/api/unixtime"){
			data = {
				"unixtime" : return_date.getTime()
			};
		} else {
			data = {
				"hour" : return_date.getHours(),
				"minute" : return_date.getMinutes(),
				"second" : return_date.getSeconds()
			};
		}

		res.writeHead(200, {'Content-Type' : 'application/json'});
		res.end(JSON.stringify(data));
	}
}).listen(process.argv[2]);