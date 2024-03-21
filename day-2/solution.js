/**
 * Getting the array of the workout sequence.
 * @param {{ start: number, trainingsAmount: number }} plan - where start is the initial duration of the first workout,
 *  and trainingsAmount is the number of workouts.
 * @returns {number} - The square of the parallelepiped.
 */
function run(plan) {
  const isInvalidType = !isObject(plan);

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide an object.');
  }

  const includesAllFields = ['start', 'trainingsAmount'].every((field) => field in plan);

  if (!includesAllFields) {
    throw new Error('Missing some field! Please provide required fields: start, trainingsAmount.');
  }

  const values = Object.values(plan);

  const hasInvalidField = values.some((value) => {
    const incorrectType = typeof value !== 'number';
    const isNotInteger = !Number.isInteger(value);
    const invalidNumber = value <= 0;

    return incorrectType || isNotInteger || invalidNumber;
  });

  if (hasInvalidField) {
    throw new Error('Invalid field! Please provide valid numbers.');
  }

  return [...Array(plan.trainingsAmount)].reduce((sequence, _, index) => {
    return [
      ...sequence,
      (sequence[index - 1] + sequence[index - 2]) || plan.start,
    ];
  }, []);
}

/**
 * Checking if the value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-null object, false otherwise.
 */
function isObject(value) {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
}
