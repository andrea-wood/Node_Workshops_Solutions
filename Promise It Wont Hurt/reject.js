var q = require('q');
var defer = q.defer();
defer.promise.then(function(data){
	
}, function(error){
	error.message = "REJECTED!";
	console.log(error.message);
});