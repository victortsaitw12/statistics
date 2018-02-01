var combination = require('./combination.js');
module.exports = (n, x, pi) => Object({
  p: combination(n, x) * Math.pow(pi, x) * Math.pow(1 - pi, n-x),
  mean: n * pi,
  variance: n * pi * (1 - pi),
  std: Math.sqrt(n * pi * (1 - pi))
})