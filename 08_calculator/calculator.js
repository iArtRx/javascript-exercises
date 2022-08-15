const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {;
  result = 0;
  for (number of numbers){
    result += number;
  }
  return result;
};

const multiply = function(numbers) {
  result = 1;
  for(number of numbers){
    result *= number
  }
  return result;

};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  if(number === 0 || number === 1){
    return 1;
  }else{
    for(let i = number - 1; i >= 1; i--){
      number = number * i;
    }
    return number;

  }
 
	
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
