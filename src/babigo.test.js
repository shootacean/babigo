import { translate } from './babigo.js';

describe('Test translate()', () => {
  test('Test 1', () => {
    const result = translate('あいうえお');
    expect(result).toBe('あばいびうぶえべおぼ');
  });

  test('Test 2', () => {
    const result = translate('こんにちは');
    expect(result).toBe('こぼんにびちびはば');
  });

  test('Test 3', () => {
    const result = translate('よろしくおねがいします');
    expect(result).toBe('よぼろぼしびくぶおぼねべがばいびしびまばすぶ');
  });

  test('Test 4', () => {
    const result = translate('はろー、わーるど');
    expect(result).toBe('はばろぼーぼ、わばーばるぶどぼ');
  });

  test('Test 5', () => {
    const result = translate('きゃっちぼーる');
    expect(result).toBe('きゃばっちびぼぼーぼるぶ');
  });

  test('Test 6', () => {
    const result = translate('きゃきゅきょ');
    expect(result).toBe('きゃばきゅぶきょぼ');
  });
});
