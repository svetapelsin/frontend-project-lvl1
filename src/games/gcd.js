import runGame from '../index.js'

const calculateGCD = (a, b) => {
  if (!b) return a
  return calculateGCD(b, a % b)
}

const generateGCDQuestion = () => {
  const num1 = Math.floor(Math.random() * 50) + 1
  const num2 = Math.floor(Math.random() * 50) + 1
  const correctAnswer = String(calculateGCD(num1, num2))
  return [`${num1} ${num2}`, correctAnswer]
}

const playGCDGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.'
  runGame(gameDescription, generateGCDQuestion)
}

export default playGCDGame
