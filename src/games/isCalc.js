const readlineSync = require('readline-sync');

console.log('What is the result of the expression?');
const getRandom = (max) => {return Math.floor(Math.random() * max)};
const action = ['+', '-', '*'];
const isCalc = () => {
  const firstRandomNum = getRandom(101);
  const secondRandomNum = getRandom(101);
  const getAction = action[getRandom(3)];
  console.log(`Question: ${firstRandomNum} ${getAction} ${secondRandomNum}`);
  let result = 0;

  switch (getAction) {
    case ('+'):
      result = firstRandomNum + secondRandomNum;
      break;
    case ('-'):
      result = firstRandomNum - secondRandomNum;
      break;
    case ('*'):
      result = firstRandomNum * secondRandomNum;
      break;
  }

  const answer = readlineSync.question('Your answer: ');
  if (result === answer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
  } else {
      console.log('Correct!');
      counter += 1;
  }
};

export default isCalc;