var mean = require('./mean.js');
  
module.exports= (arrX, arrY) => {
  var avgX = mean(arrX);
  var avgY = mean(arrY);
  var zip = arrX.map((x, i) => {
    return [x, arrY[i]];
  });
  return zip.reduce((sum, z) => sum + (z[0] - avgX) * (z[1] - avgY), 0) / (zip.length - 1);
};