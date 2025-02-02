import readlineSync from 'readline-sync';

//let name = '';
export const getAnswer = (msg) => {
    return readlineSync.question(msg);
}