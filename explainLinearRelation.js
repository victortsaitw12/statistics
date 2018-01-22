module.exports = (coefficient_of_correlation) => {
  if (coefficient_of_correlation < -0.5){
    return `strong negative linear relation, since coefficient of correlation is ${coefficient_of_correlation }`
  } else if (-0.5 < coefficient_of_correlation &&  coefficient_of_correlation < 0){
    return `weak negative linear relation, since coefficient of correlation is ${coefficient_of_correlation }`
  } else if (0 < coefficient_of_correlation &&  coefficient_of_correlation < 0.5){
    return `weak positive linear relation, since coefficient of correlation is ${coefficient_of_correlation }`
  }
  return `strong positive linear relation, since coefficient of correlation is ${coefficient_of_correlation }`
};