var mean = require('./mean.js');
var deviation = require('./deviation.js');
module.exports = arr => arr.map((x) => (x - mean(arr)) / deviation(arr));