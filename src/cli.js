const readlineSync = require('readline-sync');

const userName = function () {
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
};
export default userName;
