var q = require('q');
var defer = q.defer();
defer.promise.then(function(data){
	data = "RESOLVED!";
	console.log(data);

});

setTimeout(defer.resolve, 300);