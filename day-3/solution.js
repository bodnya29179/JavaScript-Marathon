/**
 * Remove duplicates from the list of exercises.
 * @param {string[]} exercises - List of exercises.
 * @returns {string[]} - Unique exercises.
 * @throws {Error} - If the input is not an array of strings.
 */
function run(exercises) {
  const isInvalidType = !Array.isArray(exercises);

  if (isInvalidType) {
    throw new Error('Invalid input data type! Please provide an array of strings.');
  }

  return exercises.reduce((uniqueExercises, exercise) => {
    const alreadyContains = uniqueExercises.some((value) => areWordsTheSame(value, exercise));

    if (alreadyContains) {
      return uniqueExercises;
    }

    return [...uniqueExercises, exercise];
  }, []);
}

/**
 * Comparing two words regardless of letter order.
 * @param {string} word1 - First word.
 * @param {string} word2 - Second word.
 * @returns {boolean} - True if the words are the same when letters are rearranged, false otherwise.
 */
function areWordsTheSame(word1, word2) {
  return transformWord(word1) === transformWord(word2);
}

/**
 * Transforming word into a unique string.
 * @param {string} word - The word to transform.
 * @returns {string} - The transformed word.
 */
function transformWord(word) {
  return word.toLowerCase().split('').sort().join('');
}
