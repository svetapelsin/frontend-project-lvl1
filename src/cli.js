import readlineSync from 'readline-sync';

//let name = '';
export const getAnswer = (msg) => {
    return readlineSync.question(msg);
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

