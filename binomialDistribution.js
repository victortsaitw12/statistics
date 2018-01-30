var combination = require('./combination.js');
module.exports = (n, x, pi) => 
combination(n, x) * Math.pow(pi, x) * Math.pow(1 - pi, n-x); 