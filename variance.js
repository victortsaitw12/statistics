var mean = require('./mean.js');
module.exports = (arr) => {
  var avg = mean(arr);
  return arr.reduce((sum, i) => {
    var differ = (i-avg) * (i-avg);
    return sum + differ;
  }, 0) / (arr.length - 1);
};