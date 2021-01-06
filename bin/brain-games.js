#!/usr/bin/env node // eslint-disable-line

import { getUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
export const userName = getUserName();
console.log(`Hello, ${userName}!`);
