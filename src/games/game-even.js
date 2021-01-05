import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  let failCount = 0;
  let successCount = 0;
  const Answer = {
    YES: 'yes',
    NO: 'no',
  };

  function start() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    next();
  }

  function next() {
    const num = getRandomNumber(99);
    const rightAnswer = num % 2 === 0 ? Answer.YES : Answer.NO;
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion('Your answer:');

    if (answer === rightAnswer) {
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
