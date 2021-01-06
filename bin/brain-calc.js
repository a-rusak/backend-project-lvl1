import game from '../src/games/game-calc.js';
import gameRules from '../src/index.js';
import { userName } from './brain-games.js';

gameRules.userName = userName;
gameRules.reset();
game(gameRules).start();
