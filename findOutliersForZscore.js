//a Z score that is less than -3.0 or greater than +3.0 indicates an outlier value
module.exports = arr => arr.filter((x) => x < -3.0 || x > 3.0);
