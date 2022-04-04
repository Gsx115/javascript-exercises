const ftoc = function(temp) {
  let result = (temp - 32) * (5/9);
  if (Number.isInteger(result)) return result;
  return parseFloat(result.toFixed(1));
};

const ctof = function(temp) {
  let result = temp * (9/5) + 32;
  if (Number.isInteger(result)) return result;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
