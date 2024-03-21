/**
 * Analyze the training schedule and generate a training plan.
 * @param {string[][]} schedule - Array of exercises array.
 * @returns {object} - Training plan.
 * @throws {Error} - If the input is not an array of arrays of strings.
 */
function run(schedule) {
  const isInvalidType = !Array.isArray(schedule);

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide an array of arrays of strings.');
  }

  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const plan = {};

  schedule.forEach((trainings, dayIndex) => {
    trainings.forEach((train) => {
      if (train in plan) {
        plan[train][week[dayIndex]] = (plan[train][week[dayIndex]] || 0) + 1;
      } else {
        plan[train] = { [week[dayIndex]]: 1 };
      }
    });
  });

  return plan;
}
