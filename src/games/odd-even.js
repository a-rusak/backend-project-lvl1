import { getAnswerForQuestion } from '../cli.js';

export default () => {
  let failCount = 0;
  let successCount = 0;
  let userName = null;
  const Answer = {
    YES: 'yes',
    NO: 'no',
  };

  function start(name) {
    userName = name;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    next();
  }

  function getNumber() {
    return Math.round(Math.random() * 100);
  }

  function next() {
    const num = getNumber();
    const rightAnswer = num % 2 === 0 ? Answer.YES : Answer.NO;
    console.log(`Question: ${num}`);
    const answer = getAnswerForQuestion('Your answer:');

    if (answer === rightAnswer) {
      console.log('Correct');
      successCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      failCount += 1;
    }

    check();
  }

  function check() {
    if (failCount > 0) {
      finishWithLoose();
    } else if (successCount > 2) {
      finishWithWin();
    } else {
      next();
    }
  }

  function finishWithLoose() {
    console.log(`Let's try again, ${userName}!`);
  }

  function finishWithWin() {
    console.log(`Congratulations, ${userName}!`);
  }

  return {
    start: (name) => start(name),
  };
};
