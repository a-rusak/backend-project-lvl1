const MAX_FAIL_COUNT = 0;
const MIN_SUCCESS_COUNT = 3;

export default {
  get userName() {
    return this.user_name;
  },

  set userName(name) {
    this.user_name = name;
  },

  check({ successCount, failCount }, cb) {
    if (failCount > MAX_FAIL_COUNT) {
      this.finishWithLoose();
    } else if (successCount >= MIN_SUCCESS_COUNT) {
      this.finishWithWin();
    } else {
      cb();
    }
  },

  finishWithLoose() {
    console.log(`Let's try again, ${this.userName}!`);
  },

  finishWithWin() {
    console.log(`Congratulations, ${this.userName}!`);
  },
};
