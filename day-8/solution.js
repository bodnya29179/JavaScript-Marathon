/**
 * Checks if routes intersect.
 * @param {{ x: number, y: number }[]} raceSegment - The first route with coordinates.
 * @param {{ x: number, y: number }[]} highwaySegment - The second route with coordinates.
 * @returns {boolean} - True if the routes intersect, false otherwise.
 */
function run(raceSegment, highwaySegment) {
  const raceVector = subtract(raceSegment[1], raceSegment[0]);
  const highwayVector = subtract(highwaySegment[1], highwaySegment[0]);
  const generalVector = subtract(highwaySegment[0], raceSegment[0]);

  /* Calculate the numerator of the cross product between the vectors */
  const raceNumerator = generalVector.x * raceVector.y - generalVector.y * raceVector.x;
  const highwayNumerator = generalVector.x * highwayVector.y - generalVector.y * highwayVector.x;

  /* Calculate the denominator of the cross product */
  const denominator = raceVector.x * highwayVector.y - raceVector.y * highwayVector.x;

  if (denominator === 0) {
    if (raceNumerator === 0) {
      /* Collinear lines */
      /* Check if any endpoint of one line segment coincides with the other line segment */
      const hasEqualPoints = areEqual(raceSegment[0], highwaySegment[0])
        || areEqual(raceSegment[0], highwaySegment[1])
        || areEqual(raceSegment[1], highwaySegment[0])
        || areEqual(raceSegment[1], highwaySegment[1]);

      if (hasEqualPoints) {
        /* Line segments overlap */
        return true;
      }

      /* Check if line segments overlap by comparing their projections onto the X and Y axes */
      const hasOverlappedPointsX = !this.areTheSameElements([
        (highwaySegment[0].x - raceSegment[0].x < 0),
        (highwaySegment[0].x - raceSegment[1].x < 0),
        (highwaySegment[1].x - raceSegment[0].x < 0),
        (highwaySegment[1].x - raceSegment[1].x < 0),
      ]);

      const hasOverlappedPointsY = !this.areTheSameElements([
        (highwaySegment[0].y - raceSegment[0].y < 0),
        (highwaySegment[0].y - raceSegment[1].y < 0),
        (highwaySegment[1].y - raceSegment[0].y < 0),
        (highwaySegment[1].y - raceSegment[1].y < 0),
      ]);

      return hasOverlappedPointsX || hasOverlappedPointsY;
    }

    /* Parallel lines */
    return false;
  }

  const alpha = raceNumerator / denominator;
  const beta = highwayNumerator / denominator;

  /* Coefficient should be in range from 0 to 1 */
  return (alpha >= 0 && alpha <= 1) && (beta >= 0 && beta <= 1);
}

/**
 * Subtract two points to obtain a vector.
 * @param {{ x: number, y: number }} point1 - The first point.
 * @param {{ x: number, y: number }} point2 - The second point.
 * @returns {{ x: number, y: number }} - The resulting vector obtained by subtracting point2 from point1.
 */
function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y,
  };
}

/**
 * Check if two points are equal.
 * @param {{ x: number, y: number }} point1 - The first point.
 * @param {{ x: number, y: number }} point2 - The second point.
 * @returns {boolean} - True if the points have the same coordinates, false otherwise.
 */
function areEqual(point1, point2) {
  return (point1.x === point2.x) && (point1.y === point2.y);
}

/**
 * Check if all elements in an array are the same.
 * @param {any[]} conditions - An array of values to compare.
 * @returns {boolean} - True if all elements in the array are the same, false otherwise.
 */
function areTheSameElements(conditions) {
  return conditions.every((condition) => condition === conditions[0]);
}
