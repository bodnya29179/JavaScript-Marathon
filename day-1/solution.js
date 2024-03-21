/**
 * Calculating the square of parallelepiped.
 * @param {{ w: number, l: number, h: number }} parallelepiped - Object containing width, length, and height.
 * @returns {number} - The square of the parallelepiped.
 */
function run(parallelepiped) {
  const isInvalidType = !isObject(parallelepiped);

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide an object.');
  }

  const values = Object.values(parallelepiped);

  const hasInvalidField = values.some((value) => typeof value !== 'number');

  if (hasInvalidField) {
    throw new Error('Invalid field type! Please provide valid numbers for fields.');
  }

  const includesAllFields = ['w', 'l', 'h'].every((field) => field in parallelepiped);

  if (!includesAllFields) {
    throw new Error('Missing some field! Please provide required fields: width, length, and height.');
  }

  const hasInvalidNumber = values.some((value) => value <= 0);

  if (hasInvalidNumber) {
    throw new Error('Invalid number! Please provide positive values for fields.');
  }

  const { w: width, l: length, h: height } = parallelepiped;

  return 2 * (length * width + length * height + height * width);
}

/**
 * Checking if the value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-null object, false otherwise.
 */
function isObject(value) {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

