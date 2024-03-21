# Sports anagrams

Preparations for a sporting event are in full swing, but there is a misunderstanding due to mixed letters in the names
of some exercises. Your task is to sort out this chaos by removing duplicates. For example, we have the following
list: `['squatting', 'ingttauqs', 'running', 'gninnur', 'squatting']`. After you've completed your function, the list
should become `['squatting', 'running']` - all duplicates removed. This will ensure that you are clear and concentrate
during your training.
Note: You don't need to arrange the letters in the word correctly. Your only task is to ensure that you have a unique
set of letters.

## Input

The input is a list of strings representing the names of exercises, some could be with mixed letters.

## Output

The output is a list of strings with duplicates removed.

## Tests

```javascript
expect(run(['squatting', 'ingttauqs', 'running', 'gninnur', 'squatting'])).toEqual(['squatting', 'running']);

expect(run([])).toEqual([]);

expect(run(['squatting', 'running'])).toEqual(['squatting', 'running']);
```
