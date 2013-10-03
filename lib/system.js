var spawn = require('child_process').spawn;
var commands = [];

module.exports = function() {
	setInterval(collectData, 5000);
}

function collectData() {
	temp = spawn('vcgencmd', ['measure_temp']);
	return temp;
}