var strftime = require('strftime');
var net =  require("net");
var server = net.createServer(function(socket){
	socket.write(calculate_now() + "\n");
	socket.end();
	/*
		OR...
		socket.end(calculate_date() + "\n");
	*/
});

var calculate_now = function(){
	var now = "";
	now  = strftime('%Y-%m-%d %H:%M');
	return now; // return format YYYY-MM-DD hh:mm
}

server.listen(process.argv[2]);
