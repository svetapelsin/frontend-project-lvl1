import { progressOfGame } from "../index.js";
import { greetings, name } from "../../bin/brain-games.js";
import { getRandomNumber } from "../cli.js";

export const gameProgression = () => {
    greetings();
    console.log('What number is missing in the progression?');

    let correctAnswer = 0;
    const getNewProgression = (element, step, numberHiddenElement, lengthOfProgression) => {
        let newProgression = '';
        for (let i = 1; i <= lengthOfProgression; i += 1) {
            if (i === numberHiddenElement) {
                newProgression = newProgression + ' ..';
                correctAnswer = element;
                element = element + step;
                
            } else {
                newProgression = newProgression + ` ${element}`;
                element = element + step;
            }     

        }
        return newProgression;
    };
    let i = 0;
    let checking = true;
    while (i < 3 && checking) {
        let firstElement = getRandomNumber(0, 100);
        let progressionStep = getRandomNumber(1, 10);
        let lengthOfProgression = getRandomNumber(5, 10);
        let numberHiddenElement = getRandomNumber(0, lengthOfProgression);
        let question = getNewProgression(firstElement, progressionStep, numberHiddenElement, lengthOfProgression);
        checking = progressOfGame(question, String(correctAnswer));
        //console.log(correctAnswer);
        i += 1;
    };
    if (checking) {
        console.log(`Congratulations, ${name}!`);    
    };
}