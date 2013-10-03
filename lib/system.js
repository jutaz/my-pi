var exec = require('child_process').exec;
var commands = ['measure_clock', 'measure_temp'];

module.exports = function() {
	setInterval(collectData, 5000);
}

function collectData() {
	var data = {};
	for (var i in commands) {
		data[i] = exec('vcgencmd', ['measure_temp']);
	}
	return data;
}