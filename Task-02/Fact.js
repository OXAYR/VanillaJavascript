const Big = require('big.js');
const prompt = require('prompt-sync')();

function factorial(n) {
  let result = new Big(1);
  for (let i = 2; i <= n; i++) {
    result = result.times(i);
  }
  return result;
}
const userInput = prompt('Please enter your name:');
console.log(userInput);
const factorialOf1000 = factorial(1000);
console.log(factorialOf1000.toString());