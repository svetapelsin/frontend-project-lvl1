const readlineSync = require('readline-sync');

const count = 3;

const game = (isEven?????) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < count; i += 1) {
    if (answer !== result) {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
      }
    console.log('Correct!\n');
    }  
  console.log(`Congratulations, ${name}!`);  
};