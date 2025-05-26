import runGame from '../index.js';
//import { greetUser, congratulateUser } from '../cli.js';

const generateCalcQuestion = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = '';
  }

  return [`${num1} ${operator} ${num2}`, String(correctAnswer)];
};

const playCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, generateCalcQuestion);
};

export default playCalcGame;