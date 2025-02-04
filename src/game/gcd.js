import { progressOfGame } from "../index.js";
import { greetings, name } from "../../bin/brain-games.js";
import { getRandomNumber } from "../cli.js";

export const gameGcd = () => {
    greetings();
    console.log('Find the greatest common divisor of given numbers.');
    let i = 0;
    let correctAnswer = 0;
    const findMin = (num1, num2) => {
        return num1 < num2 ? num1 : num2;
    };
    const isGcd = (num1, num2) => {
        i = findMin(num1, num2);
        while (i > 0) {
            if ((num1 % i === 0) && (num2 % i === 0)) {
                return correctAnswer = i;
            } else {
                i -= 1;
            }
        };
    };
    let checking = true;
    while (i < 3 && checking) {
        let firstNumber = getRandomNumber(1, 100);
        let secondNumber = getRandomNumber(1, 100);   
        isGcd(firstNumber, secondNumber);
        checking = progressOfGame(`${firstNumber} ${secondNumber}`, String(correctAnswer));
        //console.log(correctAnswer);
        i += 1;
    };
    if (checking) {
        console.log(`Congratulations, ${name}!`);    
    };
}