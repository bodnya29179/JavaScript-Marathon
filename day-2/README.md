# Training schedule

When preparing for training, it's important to plan your time and workload properly. So the first thing we'll start
with is our training schedule. After watching a lot of videos and researching expert recommendations, we came to the
conclusion that by adding extra minutes to the duration of each workout each time, we can prepare better. Therefore, we
decided to create a function that takes the initial duration of the first workout and the number of workouts, and
returns an array where each subsequent workout will last as long as the previous two.

## Input

The function takes two parameters:

- `start`: the initial duration of the first workout;
- `trainingsAmount`: the number of workouts.

## Output

The function returns an array where each element represents the duration of a workout. The length of the array is equal
to `trainingsAmount`.

## Tests

```javascript
expect(run({ start: 5, trainingsAmount: 5 })).toEqual([5, 5, 10, 15, 25]);

expect(run({ start: 5, trainingsAmount: 1 })).toEqual([5]);

expect(run({ start: 1, trainingsAmount: 2 })).toEqual([1, 1]);

expect(run({ start: 2, trainingsAmount: 10 })).toEqual([2, 2, 4, 6, 10, 16, 26, 42, 68, 110]);

expect(() => run({ start: 0, trainingsAmount: 5 })).toThrow();

expect(() => run({ start: 5, trainingsAmount: 0 })).toThrow();

expect(() => run({ start: 5, trainingsAmount: 2.5 })).toThrow();
```
