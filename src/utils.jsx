/**
 * Generates a randomized array of numbers using the Fisher-Yates shuffle algorithm.
 * @returns {number[]} The randomized array of numbers.
 */
export function randomizedArray() { 
  const numbers = generateNumbers(42);

  // Convert the set to an array
  let randomizedArray = Array.from(numbers);

  // Fisher-Yates shuffle
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedArray[i], randomizedArray[j]] = [randomizedArray[j], randomizedArray[i]];
  }

  return randomizedArray;
}

/**
 * Generates a set of unique numbers.
 *
 * @param {number} originalTarget - The original target number.
 * @returns {number[]} - An array of unique numbers.
 */
export function generateNumbers(originalTarget) {
  let validNumbersFound = false;
  let numbers;

  // This loop continues until a valid set of numbers is found.
  while (!validNumbersFound) {
    numbers = new Set();
    let target = originalTarget;

    // Generate 3 numbers that are less than or equal to half the target.
    // These numbers are added to the set and subtracted from the target.
    while (numbers.size < 3) {
      const num = Math.floor(Math.random() * (target / 2)) + 1;
      if (!numbers.has(num)) {
        numbers.add(num);
        target -= num;
      }
    }

    // If the final number is not in the set, add it and exit the loop.
    if (!numbers.has(target)) {
      numbers.add(target);
      validNumbersFound = true;
    }
  }

  // Generate 2 additional unique numbers and add them to the set.
  while (numbers.size < 6) {
    const num = Math.floor(Math.random() * originalTarget / 2 * 1.0) + 1;
    numbers.add(num);
  }
  
  return Array.from(numbers);
}
