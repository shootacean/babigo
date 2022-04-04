import { translate } from './babigo.js';

const EXAMPLES = [
  'あいうえお',
  'はろー、わーるど',
  'こんにちは',
  'よろしくおねがいします',
];
for (const e of EXAMPLES) {
  console.log('original:', e);
  console.log('translated:', translate(e));
  console.log();
}
