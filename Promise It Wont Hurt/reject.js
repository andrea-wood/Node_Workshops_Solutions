var q = require('q');
var defer = q.defer();

var rejection = function(error){
		console.log(error.message);	
}
defer.promise.then(null, rejection);

setTimeout(defer.reject(new Error("REJECTED!")), 300);