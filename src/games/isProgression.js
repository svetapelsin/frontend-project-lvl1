const readlineSync = require('readline-sync');

console.log('What number is missing in the progression?');

const getRandom = (max) => {return Math.floor(Math.random() * max)};

const getProgression = () => {
  const progression = [];
  const lengthProgression = 10;
  const start = getRandom(91);
  const step = getRandom(10);
  for (let i = start; progression.length <= lengthProgression; i += step) {
    progression.push(i);
  }
  return progression;
}

const isProgression = () => {
  let progression = getProgression();
  progression[getRandom(10)] = result;
  progression[result] = '..';  
  console.log(`Question: ${progression}`);
  const answer = readlineSync.question('Your answer: ');
};

export default isProgression;