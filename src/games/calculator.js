import { getAnswerForQuestion } from '../cli.js';

export default (rules) => {
  let failCount = 0;
  let successCount = 0;
  const Operations = ['+', '-', '*'];

  function start() {
    console.log('What is the result of the expression?');
    next();
  }

  function getNumber() {
    return Math.round(Math.random() * 100);
  }

  function getOperation() {
    const index = Math.round(Math.random() * 2);
    return Operations[index];
  }

  function next() {
    const num1 = getNumber();
    const num2 = getNumber();
    const operation = getOperation();
    const expression = `${num1} ${operation} ${num2}`;
    // eslint-disable-next-line no-eval
    const rightAnswer = eval(expression);
    console.log(`Question: ${expression}`, rightAnswer);
    const answer = getAnswerForQuestion('Your answer:');

    if (answer === rightAnswer.toString()) {
      console.log('Correct');
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
