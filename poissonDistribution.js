var factorial = require('./factorial.js');
module.exports = (lambda, x) => {
    var e = 2.71828;
    return Math.pow(e, -1 * lambda) * Math.pow(lambda, x) / factorial(x);
};