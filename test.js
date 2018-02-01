var comb = require('./combination.js');
var poissonDistribution = require('./poissonDistribution.js');

var lambda = 6.0;
Xs = [0]
var ans = Xs.reduce((sum, x) => sum + poissonDistribution(lambda, x), 0);
console.log(ans);

