#!/usr/bin/env node

import { getUserName } from '../src/cli.js';
import game from '../src/game.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);
game().start(userName);
