const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;

  return arr.reduce((a, b) => a * b, 1);
};

const power = function(num, power) {
  return Math.pow(num, power);
};

const factorial = function(num) {
	let final = 1;

  for (let i = 1; i <= num; i++) {
    final *= i;
  }

  return final;
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
