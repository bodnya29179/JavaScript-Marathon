/**
 * Checks if a hit is inside a field.
 * @param {{ x: number, y: number }[]} field - The vertices of the polygon defining the field.
 * @param {{ x: number, y: number }} hit - The point to be checked.
 * @returns {boolean} - True if the hit is inside the field, false otherwise.
 */
function run(field, hit) {
  let isInside = false;

  for (let i = 0, j = field.length - 1; i < field.length; j = i++) {
    const { x: xi, y: yi } = field[i];
    const { x: xj, y: yj } = field[j];

    /* Check if the endpoints of the edge are above or below the hit point */
    const isAbove = yi >= hit.y;
    const isBelow = yj >= hit.y;

    /* Check if the hit point is on the right side of the edge */
    const isOnRightSide = hit.x <= (((xj - xi) * (hit.y - yi) / (yj - yi)) + xi);

    /* Check if the hit point intersects with the edge */
    const intersectsEdge = (isAbove !== isBelow) && isOnRightSide;

    if (intersectsEdge) {
      /**
       * Toggling the isInside flag upon finding an intersection allows us to correctly handle cases
       * where the ray intersects an even number of edges. If we encounter an odd number of intersections,
       * the hit is inside the field. Conversely, if the number is even, the hit is outside. Toggling the flag
       * helps us keep track of this parity as we iterate through the field's edges.
       */
      isInside = !isInside;
    }
  }

  return isInside;
}
