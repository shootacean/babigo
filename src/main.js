import { exit } from 'process';
import { translate } from './babigo.js';

if (!process.argv[2]) {
  console.error('Exanmple: $ babigo "ありがとう"');
  exit();
}

console.log(translate(process.argv[2]));
