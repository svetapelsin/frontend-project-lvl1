const readlineSync = require('readline-sync');

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = () => {
  const randomNum = Math.floor(Math.random() * 101);
  console.log(`Question: ${randomNum}`);
  const result = (randomNum % 2) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if (result !== answer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
  } else {
      console.log('Correct!');
      counter += 1;
  }
};

export default isEven;