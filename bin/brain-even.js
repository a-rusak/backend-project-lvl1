#!/usr/bin/env node

import { getUserName } from '../src/cli.js';
import game from '../src/games/game-even.js';
import gameRules from '../src/index.js';
import './brain-games.js';

const userName = getUserName();
console.log(`Hello, ${userName}!`);
gameRules.userName = userName;
gameRules.reset();
game(gameRules).start();
