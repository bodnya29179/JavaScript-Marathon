/**
 * Finds the shortest route in the marathon visiting all control points.
 * @param {number[][]} matrix - The adjacency matrix representing the distances between points.
 * @returns {number} - The length of the shortest path.
 * @throws {Error} - If the input is not an array or it is an empty array.
 */
function run(matrix) {
  if (!matrix?.length) {
    throw new Error('Invalid input data type! Please provide an adjacency matrix with numbers.');
  }

  const points = getRoutePoints(matrix);
  const pointCombinations = generateUniqueCombinations(points);
  const routes = getAllRoutes(pointCombinations, matrix);

  return Math.min(...routes);
}

/**
 * Retrieves the route points from the given adjacency matrix.
 * @param {number[][]} matrix - The adjacency matrix representing the distances between points.
 * @returns {number[]} - An array containing the names of all points in the marathon.
 *
 * @example
 * For the input adjacency matrix:
 * [
 *   [0, 5, 15],
 *   [5, 0, 3],
 *   [15, 3, 0]
 * ],
 * The function will return:
 * [0, 1, 2] that describes point "0", point "1" and point "2" in the marathon.
 */
function getRoutePoints(matrix) {
  return [...new Array(matrix.length)].map((_, index) => index);
}

/**
 * Generates unique combinations of points.
 * @param {number[]} points - An array containing the names of all points.
 * @returns {string[]} - An array of unique combinations of points represented as strings.
 *
 * @example
 * For the input points [0, 1, 2],
 * The function will return ['012', '021', '201'].
 */
function generateUniqueCombinations(points) {
  const generate = (current, remaining) => {
    if (!remaining.length) {
      return [current.join('')];
    }

    const combinations = [];

    remaining.forEach((letter, index) => {
      const newCurrent = [...current, letter];
      const newRemaining = [...remaining.slice(0, index), ...remaining.slice(index + 1)];
      const subCombinations = generate(newCurrent, newRemaining);
      const uniqueSubCombinations = subCombinations.filter((combination) => {
        return !combinations.includes(combination.split('').reverse().join(''));
      });

      combinations.push(...uniqueSubCombinations);
    });

    return combinations;
  };

  return generate([], points);
}

/**
 * Splits points into pairs.
 * @param {string} pointsCombination - The string representing a combination of points.
 * @returns {string[]} - An array of pairs of adjacent characters.
 *
 * @example
 * For points combination '0123',
 * The function will return ['01', '12', '23'].
 */
function splitIntoPairs(pointsCombination) {
  return [...new Array(pointsCombination.length - 1)].map((_, index) => {
    return pointsCombination.substring(index, index + 2);
  })
}

/**
 * Calculates the total distance for each route.
 * @param {string[]} pointCombinations - An array of combinations of points represented as strings.
 * @param {number[][]} matrix - The adjacency matrix representing the distances between points.
 * @returns {number[]} - An array containing the total distance for each route.
 */
function getAllRoutes(pointCombinations, matrix) {
  return pointCombinations.map((combination) => {
    const distances = splitIntoPairs(combination);
    const route = distances.reduce((total, [row, column]) => total + matrix[row][column], 0);

    return route;
  });
}
