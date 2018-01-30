var covariance = require('./covariance.js');
var dev = require('./deviation.js');
module.exports = (arrX, arrY) => covariance(arrX, arrY) / (dev(arrX) * dev(arrY));