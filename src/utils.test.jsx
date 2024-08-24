import { generateNumbers, randomizedArray } from './utils';

describe('generateNumbers', () => {
  test('should return an array of 6 numbers', () => {
    const numbers = generateNumbers(100);
    expect(numbers.length).toBe(6);
  });

  test('should return unique numbers', () => {
    const numbers = generateNumbers(100);
    const set = new Set(numbers);
    expect(set.size).toBe(numbers.length);
  });

  test('should return 4 numbers that sum to the target', () => {
    const target = 100;
    const numbers = generateNumbers(target);
    
    // Get the sum of the first 4 numbers. Before randomization, these should be the numbers that sum to the target.
    const sum = numbers.slice(0, 4).reduce((a, b) => a + b, 0);
    
    expect(sum).toBe(target);
  });
});

describe('randomizedArray', () => {
  test('should return an array of 6 numbers', () => {
    const numbers = randomizedArray();
    expect(numbers.length).toBe(6);
  });

  test('should return unique numbers', () => {
    const numbers = randomizedArray();
    const set = new Set(numbers);
    expect(set.size).toBe(numbers.length);
  });
});