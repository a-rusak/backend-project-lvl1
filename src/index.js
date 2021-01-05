const MAX_FAIL_COUNT = 0;
const MIN_SUCCESS_COUNT = 3;

export default {
  get userName() {
    return this.user_name;
  },

  set userName(name) {
    this.user_name = name;
  },

  get failCount() {
    return this.fail_count;
  },

  set failCount(count) {
    this.fail_count = count;
  },

  get successCount() {
    return this.success_count;
  },

  set successCount(count) {
    this.success_count = count;
  },

  reset() {
    this.successCount = 0;
    this.failCount = 0;
  },

  check({ rightAnswer, answer }, cb) {
    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
      this.successCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      this.failCount += 1;
    }

    if (this.failCount > MAX_FAIL_COUNT) {
      this.finishWithLoose();
    } else if (this.successCount >= MIN_SUCCESS_COUNT) {
      this.finishWithWin();
    } else {
      cb();
    }
  },

  finishWithLoose() {
    console.log(`Let's try again, ${this.userName}!`);
    this.reset();
  },

  finishWithWin() {
    console.log(`Congratulations, ${this.userName}!`);
    this.reset();
  },
};
