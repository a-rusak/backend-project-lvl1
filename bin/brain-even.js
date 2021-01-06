#!/usr/bin/env node

import game from '../src/games/game-even.js';
import rules from '../src/index.js';
import { userName } from './brain-games.js';

const gameRules = rules();
gameRules.setUserName(userName);
gameRules.reset();
game(gameRules).start();
