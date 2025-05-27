import readlineSync from 'readline-sync'
import { greetUser, congratulateUser } from './cli.js'

const runGame = (description, generateQuestion) => {
  const userName = greetUser()
  console.log(description)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  congratulateUser(userName)
}

export default runGame
