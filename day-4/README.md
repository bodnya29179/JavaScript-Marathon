# Training plan

Now that we've figured out the duration of your workouts, it's time to set up your training schedule! Our goal is to
ensure that you work different muscle groups evenly and effectively throughout the week. We have a table with workouts,
where each row represents a day of the week, and each column represents a specific type of workout (e.g., running,
strength training, stretching). We need to develop a function that analyzes our training schedule and determines whether
we have an even distribution of different types of training throughout the week. We want each day of the week to be
different from the previous day and to promote the development of different muscle groups.

## Input

```javascript
const schedule = [
  ['Running', 'Plank', 'Stretching'],
  ['Plank', 'Stretching', 'Running', 'Plank'],
  ['Stretching', 'Running', 'Plank'],
];
```

## Output

```javascript
const result = {
  Running: { Monday: 1, Tuesday: 1, Wednesday: 1 },
  Plank: { Monday: 1, Tuesday: 2, Wednesday: 1 },
  Stretching: { Monday: 1, Tuesday: 1, Wednesday: 1 },
};
```

## Tests

```javascript
expect(
  run(
    [
      ['Running', 'Plank', 'Stretching'],
      ['Plank', 'Stretching', 'Running', 'Plank'],
      ['Stretching', 'Running', 'Plank']
    ],
  )
).toEqual(
  {
    Running: { Monday: 1, Tuesday: 1, Wednesday: 1 },
    Plank: { Monday: 1, Tuesday: 2, Wednesday: 1 },
    Stretching: { Monday: 1, Tuesday: 1, Wednesday: 1 },
  },
);

expect(
  run([['Running'], ['Running'], ['Running']])
).toEqual(
  { Running: { Monday: 1, Tuesday: 1, Wednesday: 1 } }
);

expect(
  run([['Running', 'Plank'], [], ['Plank', 'Running'], [], ['Running', 'Plank']])
).toEqual(
  {
    Running: { Monday: 1, Wednesday: 1, Friday: 1 },
    Plank: { Monday: 1, Wednesday: 1, Friday: 1 },
  },
);

expect(run([])).toEqual([]);
```
