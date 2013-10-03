var parser = {};

parser.temp = function(temp, callback) {
	var parsed = parseInt(temp);
	callback(parsed);
}


module.exports = parser;