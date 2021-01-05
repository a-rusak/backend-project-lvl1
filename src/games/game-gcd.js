import { getAnswerForQuestion } from '../cli.js';
import getGCD from '../utils/gcd.js';

export default (rules) => {
  let failCount = 0;
  let successCount = 0;

  function start() {
    console.log('Find the greatest common divisor of given numbers.');
    next();
  }

  function getNumber() {
    return Math.round(Math.random() * 9);
  }

  function next() {
    const num1 = getNumber();
    const num2 = getNumber();
    const rightAnswer = getGCD(num1, num2);
    console.log(`Question: ${num1} ${num2}`, rightAnswer);
    const answer = getAnswerForQuestion('Your answer:');

    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
      successCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      failCount += 1;
    }

    rules.check({ successCount, failCount }, next);
  }

  return {
    start: () => start(),
  };
};
