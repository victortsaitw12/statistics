var mean = require('./mean.js');
module.exports = arr => {
  var sorted_arr = arr.slice().sort((a,b) => a-b);
  return arr.length % 2 === 0 ?
mean(soted_arr.slice(arr.length/2 - 1, arr.length/2 + 1))
: sorted_arr[(arr.length + 1) / 2  - 1];
};