/**
 * Analyze the possibility to create a route.
 *
 * @param {number} a - The distance between participant A and participant B.
 * @param {number} b - The distance between participant B and participant C.
 * @param {number} c -  The distance between participant C and participant A.
 *
 * @returns {boolean} - True if it is possible to create a route, false otherwise.
 *
 * @throws {Error} - If the input is not a number.
 * @throws {Error} - If the input is number less or equal to zero.
 */
function run(a, b, c) {
  const isInvalidType = [a, b, c].some((num) => typeof num !== 'number');

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide a sequence of numbers.');
  }

  const isInvalidNumber = [a, b, c].some((num) => num <= 0);

  if (isInvalidNumber) {
    throw new Error('Invalid numbers! Please provide numbers greater than zero.');
  }

  return (a + b > c) && (a + c > b) && (b + c > a);
}
