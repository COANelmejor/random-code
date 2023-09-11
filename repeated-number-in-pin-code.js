/**
 * This script was creadted inspired by the pin code of a the Uber app.
 *
 * The idea is to know the probability of having at least 1 repeated number in a 4 digits code.
 *
 * Also added a variation to check for any number of digits.
 *
 * The complexity of the script is O(n^2) because of the nested loop.
 */

// Add for digits string to an array
// starting with "0000" and ending with "9999"

let digitCodes = [];
for (let i = 0; i < 10000; i++) {
  let code = i.toString().padStart(4, "0");
  digitCodes.push(code);
}

console.log(`Added ${digitCodes.length} codes to the array.`);

// Check if in every string there is a repeted number
// ex: 1234 -> false
// ex: 1224 -> true

let repeatedNumbers = digitCodes.filter((code) => {
  let digits = code.split("");
  let result = digits.some((digit, index) => {
    return digits.indexOf(digit) !== index;
  });
  return result;
});

console.log(`Found ${repeatedNumbers.length} repeated numbers.`);

// Log random examples of repeated number
console.log("Here are some examples:");
for (let i = 0; i < 10; i++) {
  let randomIndex = Math.floor(Math.random() * repeatedNumbers.length);
  console.log(repeatedNumbers[randomIndex]);
}

// Log the probability of having a repeated number
console.log(
  `The probability of having a repeated number in Uber pin code is ${(
    (repeatedNumbers.length / digitCodes.length) *
    100
  ).toFixed(2)}%`
);

// Add a variation selecting the number of digits on the terminal
// ex: 3 digits -> from '000' to '999'
// ex: 5 digits -> from '00000' to '99999'

// ask the user for the number of digits while running the script
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("How many digits do you want to check? ", (digits) => {
  console.log(`Checking for ${digits} digits...`);

  // Add for digits string to an array
  // starting with "0000" and ending with "9999"

  let digitCodes = [];
  for (let i = 0; i < 10 ** digits; i++) {
    let code = i.toString().padStart(digits, "0");
    digitCodes.push(code);
  }

  console.log(`Added ${digitCodes.length} codes to the array.`);

  // Check if in every string there is a repeted number
  // ex: 1234 -> false
  // ex: 1224 -> true

  let repeatedNumbers = digitCodes.filter((code) => {
    let digits = code.split("");
    let result = digits.some((digit, index) => {
      return digits.indexOf(digit) !== index;
    });
    return result;
  });

  console.log(`Found ${repeatedNumbers.length} repeated numbers.`);

  // Log random examples of repeated number
  console.log("Here are some examples:");
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * repeatedNumbers.length);
    console.log(repeatedNumbers[randomIndex]);
  }

  // Log the probability of having a repeated number

  console.log(
    `The probability of having a repeated number is ${(
      (repeatedNumbers.length / digitCodes.length) *
      100
    ).toFixed(2)}%`
  );

  readline.close();
});
