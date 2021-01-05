#!/usr/bin/env node

import { getAnswerForQuestion } from '../src/cli.js';
import game from '../src/games/game-even.js';
import gameRules from '../src/index.js';
import './brain-games.js';

const userName = getAnswerForQuestion('May I have your name?');
console.log(`Hello, ${userName}!`);
gameRules.userName = userName;
gameRules.reset();
game(gameRules).start();
