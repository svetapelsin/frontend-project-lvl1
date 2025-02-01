import readlineSync from 'readline-sync';

//let name = '';
export const greetings = (name) => {
    name = readlineSync.question('May I have your name? ');
    return (`Hello, ${name}!`);
}