const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  return sum;
}

const multiply = function(numbers) {
  if(numbers.length === 0) return 0;
  let product = 1;
  numbers.forEach(num => {
    product *= num;
  });
  return product;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
  if(num === 0) return 1;
	return factorial(num-1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
