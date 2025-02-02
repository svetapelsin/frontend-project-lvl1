#!/usr/bin/env node
import { name, greetings } from './brain-games.js';
import { getAnswer } from '../src/cli.js';


greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswer = '';
const isEven = (number) => {
    if (number % 2 === 0) {
        correctAnswer = "yes";
        return true;
    } else {
        correctAnswer = 'no';
        return false;
    }
};

let i = 0;
let isWin = true;
while (i < 3) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    let userAnswer = getAnswer('Your answer: ');
    if ((isEven(randomNumber) && userAnswer === "yes") || (!isEven(randomNumber) && userAnswer === 'no')) {
        console.log('Correct!');
        i += 1;
    } else {
        console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
        isWin = false;
        i = 3;
    }
};

if (isWin) {
    console.log(`Congratulations, ${name}!`);
};