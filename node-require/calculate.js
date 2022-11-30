const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log('result:', add(num1, num2));
} else if (process.argv[3] === 'minus') {
  console.log('result:', subtract(num1, num2));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiply(num1, num2));
} else if (process.argv[3] === 'over') {
  console.log('result:', divide(num1, num2));
} else {
  console.log('invalid operation');
}
