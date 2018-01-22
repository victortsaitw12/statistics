var mean = require('./mean.js');
var median = require('./median.js');
module.exports = arr => {
  var avg = mean(arr);
  var middle = median(arr);
  if (avg > middle){
    return 'Right skewed because mean > median';
  } else if (avg < middle){
    return 'Left skewed because median < mean';
  }
  return 'median === mean, no skewed';
};