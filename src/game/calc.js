import { greetings, name } from "../../bin/brain-games.js";
import { getRandomNumber } from "../cli.js";
import { progressOfGame } from "../index.js";


export const gameCalc = () => {
    greetings();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let i = 0;
    let randomPhrase = '';
    let correctAnswer = 0;
    const calculation = (num1, num2, operator) => {
         switch (operator) {
            case 1:
                randomPhrase = `${num1} + ${num2}`;
                correctAnswer = num1 + num2;
                break;
            case 2:
                randomPhrase = `${num1} - ${num2}`;
                correctAnswer = num1 - num2;
                break;
            case 3:
                randomPhrase = `${num1} * ${num2}`;
                correctAnswer = num1 * num2;
                break;
            default:
                console.log("Error!");            
         };
    };
    let checking = true;
    while (i < 3 && checking) {
        let firstNumber = getRandomNumber(0, 10);
        let secondNumber = getRandomNumber(0, 10);
        let simbol = getRandomNumber(1, 3);
        calculation(firstNumber, secondNumber, simbol);
        checking = progressOfGame(randomPhrase, String(correctAnswer));
        //-console.log(correctAnswer);
        i += 1;
    }
    if (checking) {
        console.log(`Congratulations, ${name}!`);    
    };
}