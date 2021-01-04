#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { getUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!')
var userName = getUserName();
console.log('Hello, ' + userName + '!');