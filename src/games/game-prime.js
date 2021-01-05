import { getAnswerForQuestion } from '../cli.js';
import isPrime from '../utils/isPrime.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  function start() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    next();
  }

  function next() {
    const num = getRandomNumber(8) + 1;
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion('Your answer:');

    rules.check({ rightAnswer, answer }, next);
  }

  return {
    start: () => start(),
  };
};
