#!/usr/bin/env node
import { gameEven } from '../src/game/even.js';
//import { greetings } from './brain-games.js';


gameEven();
// let correctAnswer = '';
// const isEven = (number) => {
//     if (number % 2 === 0) {
//         correctAnswer = "yes";
//         return true;
//     } else {
//         correctAnswer = 'no';
//         return false;
//     }
// };

// let i = 0;
// let isWin = true;
// while (i < 3) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     console.log(`Question: ${randomNumber}`);
//     let userAnswer = getAnswer('Your answer: ');
//     if (correctAnswer === userAnswer) {
//         console.log('Correct!');
//         i += 1;
//     } else {
//         console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
//         isWin = false;
//         i = 3;
//     }
// };

// if (isWin) {
//     console.log(`Congratulations, ${name}!`);
// };