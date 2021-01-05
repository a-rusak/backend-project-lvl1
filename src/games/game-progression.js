import { getAnswerForQuestion } from '../cli.js';
import getGCD from '../utils/gcd.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  let failCount = 0;
  let successCount = 0;

  function start() {
    console.log('Find the greatest common divisor of given numbers.');
    next();
  }

  function createProgression(first, base, count) {
    return [...Array(count)].map((_, i) => first + base * i);
  }

  function hideProgressionNumberByIndex(progression, index) {
    const p = [...progression];
    p[index] = '..';
    return p;
  }

  function next() {
    const first = getRandomNumber(19);
    const base = getRandomNumber(5) + 1;
    const count = getRandomNumber(5) + 5;
    const progression = createProgression(first, base, count);
    const rightAnswerIndex = getRandomNumber(count - 1);
    const rightAnswer = progression[rightAnswerIndex];
    const progToShow = hideProgressionNumberByIndex(progression, rightAnswerIndex)
      .join(' ');
    console.log(`Question: ${progToShow}`);
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
