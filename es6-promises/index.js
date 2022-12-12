const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Patricia');

promise1.then(name => {
  console.log(name);
});
promise1.catch(error => {
  console.error(error.message);
});
