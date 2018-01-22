var mean = require('./mean.js');
var deviation = require('./deviation.js');
module.exports = arr => {
  var avg = mean(arr);
  var dev = deviation(arr);
  return `68% between ${avg - dev} and ${avg + dev},` +
         `95% between ${avg - 2 * dev} and ${avg + 2 * dev},` +
         `99.7% between ${avg - 3 * dev} and ${avg + 3 * dev}`;
};