import { progressOfGame } from "../index.js";
import { getRandomNumber } from "../cli.js";
import { greetings, name } from "../../bin/brain-games.js";



export const gameEven = () => {
    greetings();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let i = 0;
    const isEven = (number) => {    
        return number % 2 === 0 ? "yes" : "no"; 
    };
    let checking = true;
    while (i < 3 && checking) {
        let randomNumber = getRandomNumber(0, 100);
        let correctAnswer = isEven(randomNumber);
        checking = progressOfGame(randomNumber, correctAnswer);        
        i += 1;
    }    
    if (checking) {
        console.log(`Congratulations, ${name}!`);        // return true;

    };
}
// gameMechanic(isEven(getRandomNumber(0, 100)), getAnswer('Your answer: '));
// }
// greetings();
// console.log('Answer "yes" if the number is even, otherwise answer "no".');

// export let question = 0
// const isEven = (number) => {
//     question = number;
//     return number % 2 === 0 ? "yes" : "no"; 
// };

// gameMechanic(isEven(getRandomNumber(0, 100)), getAnswer('Your answer: '));

// export default even;