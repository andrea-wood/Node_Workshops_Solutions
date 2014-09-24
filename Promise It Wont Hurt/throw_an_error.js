
var parsePromised = function(json_data){
	var q = require('q');
	var defer = q.defer();

	try{
		console.log(JSON.parse(json_data));
	} catch(e) {
		defer.reject(e);
	}

	defer.resolve(json_data);
	return defer.promise;
}

parsePromised(process.argv[2]).then(null, console.log);