#!/usr/bin/env node // eslint-disable-line

import game from '../src/games/game-gcd.js';
import gameRules from '../src/index.js';
import { userName } from './brain-games.js';

gameRules.userName = userName;
gameRules.reset();
game(gameRules).start();
