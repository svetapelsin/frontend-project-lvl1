const readlineSync = require('readline-sync');

console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

const getRandom = (max) => {return Math.floor(Math.random() * max)};

console.log(`Question: ${randomNum}`);
const isPrime = (number) => {
    if (number < 2) {
      return false;
    }  
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }  
    return true;
  };