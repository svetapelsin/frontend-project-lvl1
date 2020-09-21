const readlineSync = require('readline-sync');

console.log('Find the greatest common divisor of given numbers.');
const getRandom = (max) => {return Math.floor(Math.random() * max)};
const searchGSD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
      
  return gcd(b, a % b);
};

const isGSD = () => {
  const firstRandomNum = getRandom(101);
  const secondRandomNum = getRandom(101);
  console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
  const result = searchGSD(firstRandomNum, secondRandomNum)
  const answer = readlineSync.question('Your answer: ');
  if (result !== answer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
  } else {
      console.log('Correct!');
      counter += 1;
  }
};

export default isGSD;