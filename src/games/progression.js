import runGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateProgressionQuestion = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // 5-10 чисел
  const progressionStep = Math.floor(Math.random() * 10) + 1; // шаг 1-10
  const progressionStart = Math.floor(Math.random() * 50) + 1; // начальное число 1-50
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  
  const progression = generateProgression(
    progressionStart,
    progressionStep,
    progressionLength
  );
  
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};

const playProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  runGame(gameDescription, generateProgressionQuestion);
};

export default playProgressionGame;