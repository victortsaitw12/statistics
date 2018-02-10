module.exports = (lambda, x) => {
    var e = 2.71828;
    return 1 - Math.pow(e, -1 * lambda * x);
};