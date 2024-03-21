/**
 * Check if an arrow hits the target.
 * @param {{ x: number, y: number, radius: number }} data - Input data representing a target radius and a hit coordinates.
 * @returns {boolean} - True if the hit is inside of the target, false otherwise.
 * @throws {Error} - If the input is not an object or if it is missing any of the required fields: x, y, radius.
 */
function run(data) {
  const isInvalidType = !isObject(data);

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide an object.');
  }

  const includesAllFields = ['x', 'y', 'radius'].every((field) => field in data);

  if (!includesAllFields) {
    throw new Error('Missing some field! Please provide required fields: x, y, radius.');
  }

  const { x, y, radius } = data;

  return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(radius, 2);
}

/**
 * Checking if the value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-null object, false otherwise.
 */
function isObject(value) {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
}
