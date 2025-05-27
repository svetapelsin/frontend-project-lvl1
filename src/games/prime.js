import runGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i += 1) {
    if (number % i === 0) return false
  }  
  return true
}

const generatePrimeQuestion = () => {
  const number = Math.floor(Math.random() * 50) + 1
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

const playPrimeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runGame(gameDescription, generatePrimeQuestion)
}

export default playPrimeGame