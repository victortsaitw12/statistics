var mean = require('./mean.js');
var deviation = require('./deviation.js');
module.exports = arr => deviation(arr) / mean(arr) * 100;