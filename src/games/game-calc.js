import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  let failCount = 0;
  let successCount = 0;
  const Operations = ['+', '-', '*'];

  function start() {
    console.log('What is the result of the expression?');
    next();
  }

  function getOperation() {
    return Operations[getRandomNumber(2)];
  }

  function next() {
    const num1 = getRandomNumber(99);
    const num2 = getRandomNumber(99);
    const operation = getOperation();
    const expression = `${num1} ${operation} ${num2}`;
    // eslint-disable-next-line no-eval
    const rightAnswer = eval(expression);
    console.log(`Question: ${expression}`);
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
