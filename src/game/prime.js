import { greetings, name } from "../../bin/brain-games.js";
import { getRandomNumber } from "../cli.js";
import { progressOfGame } from "../index.js";

export const gamePrime = () => {
    greetings();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let i = 0; 
    let correctAnswer = '';
    const isPrime = (num) => {
        if (num === 1) {
            return 'no';
        }
        for (let i = 2; i < num; i += 1) {
            if (num % i === 0) {
                return 'no';
            }            
        }
        return 'yes';
        
    };
    //consolele.log(isPrime(3));

    
    let checking = true;
    while (i < 3 && checking) {
        let randomNumber = getRandomNumber(0, 100);
        isPrime(randomNumber);
        correctAnswer = isPrime(randomNumber);
        checking = progressOfGame(randomNumber, correctAnswer);        
        i += 1;
    }
    if (checking) {
        console.log(`Congratulations, ${name}!`);    
    };
}