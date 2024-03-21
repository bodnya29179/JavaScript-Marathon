/**
 * Getting the most cost-effective pizza slice.
 * @param {{ radius: number, angle: number, price: number }[]} pizzaSlices - Array of pizza slices.
 * @returns {{ radius: number, angle: number, price: number } | null} - The most cost-effective pizza slice or null if the array is empty.
 * @throws {Error} - If the input is not an array of pizza slices.
 */
function run(pizzaSlices) {
  const isInvalidType = !Array.isArray(pizzaSlices);

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide an array of pizza slices.');
  }

  if (!pizzaSlices.length) {
    return null;
  }

  const slices = pizzaSlices.filter(({ price, radius }) => price >= 0 && radius >= 0);

  const sliceAreas = slices.map(({ radius, angle }) => this.calculateCircleSectorArea(radius, angle));

  const pricesPerUnit = sliceAreas.map((square, index) => slices[index].price / square);

  const indexOfFavorablePizza = pricesPerUnit.indexOf(Math.min(...pricesPerUnit));

  return slices[indexOfFavorablePizza];
}

/**
 * Calculate the area of a circle sector.
 * @param {number} radius - Radius of the circle.
 * @param {number} angle - Angle of the sector in degrees.
 * @returns {number} - Area of the circle sector.
 */
function calculateCircleSectorArea(radius, angle) {
  return (Math.PI * Math.pow(radius, 2) * angle) / 360;
}
