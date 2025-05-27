import runGame from '../index.js'

const generateEvenQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [number, correctAnswer]
}

const playEvenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'
  runGame(gameDescription, generateEvenQuestion)
}

export default playEvenGame
