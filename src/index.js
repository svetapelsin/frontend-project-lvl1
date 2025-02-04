// import { question } from 'readline-sync';
import { name } from '../bin/brain-games.js';
import { getAnswer } from './cli.js';
//import { question } from './game/even.js';
//import { randomNumber } from './game/even.js';

// export const gameMechanic = (question, userAnswer, correctAnswer) => {
//    let i = 0;
//    let isWin = true;
//    while (i < 3) {
//         console.log(`Question: ${question}`);
//         if (correctAnswer === userAnswer) {
//             console.log('Correct!');
//             i += 1;
//         } else {
//             console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
//             isWin = false;
//             i = 3;
//         }
//     }
//     if (isWin) {
//         console.log(`Congratulations, ${name}!`);
//     };
// }
export const progressOfGame = (question, correctAnswer) => {
    console.log(`Question: ${question}`);
    let userAnswer = getAnswer('Your answer: ');
    let isCorrect = true;
    if (correctAnswer === userAnswer) {
        console.log('Correct!');
        // return true;
        //i += 1;
    } else {
        console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
        isCorrect = false;
        // return false;
    };

    return isCorrect;
};



