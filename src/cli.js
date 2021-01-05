import readlineSync from 'readline-sync';

export const getAnswerForQuestion = (question) => readlineSync.question(`${question} `);
