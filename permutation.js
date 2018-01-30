var factorial = require('./factorial.js');
module.exports = (n, x) => factorial(n) / factorial(n - x)