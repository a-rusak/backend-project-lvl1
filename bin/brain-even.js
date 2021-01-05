#!/usr/bin/env node

import { getAnswerForQuestion } from '../src/cli.js';
import game from '../src/games/game-even.js';
import gameRules from '../src/index.js';

const userName = getAnswerForQuestion('May I have your name?');
console.log(`Hello, ${userName}!`);
gameRules.userName = userName;
game(gameRules).start();
