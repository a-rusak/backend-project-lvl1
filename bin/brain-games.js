#!/usr/bin/env node

import { getAnswerForQuestion } from '../src/cli.js';
import game from '../src/games/odd-even.js';

console.log('Welcome to the Brain Games!');
const userName = getAnswerForQuestion('May I have your name?');
console.log(`Hello, ${userName}!`);
game().start(userName);
