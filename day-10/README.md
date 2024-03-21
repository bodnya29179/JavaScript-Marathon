# Throw Into Uncertainty

Are you ready for the final stretch, where the last challenge awaits you - the spear-throwing competition? Participants
throw spears into a designated area, which is a polygon with predefined coordinates. After the best throw, judges need
to determine whether the participant hit the target, knowing the coordinates of their throw.

## Input

```javascript
const field = [
  { x: 1, y: 0 },
  { x: 0, y: 3 },
  { x: 3, y: 5 },
  { x: 6, y: 3 },
  { x: 5, y: 0 },
];

const hit = { x: 2, y: 3 };
```

## Output

True if the spear hits the defined field, false otherwise.

## Tests

```javascript
expect(
  run(
    [
      { x: 0, y: 0 },
      { x: 0, y: 5 },
      { x: 5, y: 5 },
      { x: 5, y: 0 },
    ],
    { x: 2, y: 2 },
  )
).toBe(true);

expect(
  run(
    [
      { x: 0, y: 0 },
      { x: 0, y: 5 },
      { x: 5, y: 5 },
      { x: 5, y: 0 },
    ],
    { x: 2, y: 5 },
  )
).toBe(true);

expect(
  run(
    [
      { x: 0, y: 0 },
      { x: 0, y: 5 },
      { x: 5, y: 5 },
      { x: 5, y: 0 },
    ],
    { x: 5, y: 2 },
  )
).toBe(true);

expect(
  run(
    [
      { x: 0, y: 0 },
      { x: 0, y: 5 },
      { x: 5, y: 5 },
      { x: 5, y: 0 },
    ],
    { x: 6, y: 6 },
  )
).toBe(false);

expect(
  run(
    [
      { x: 0, y: 0 },
      { x: 0, y: 5 },
      { x: 5, y: 5 },
      { x: 5, y: 0 },
    ],
    { x: 2, y: 6 },
  )
).toBe(false);

expect(
  run(
    [
      { x: 0, y: 0 },
      { x: 0, y: 5 },
      { x: 5, y: 5 },
      { x: 5, y: 0 },
    ],
    { x: 6, y: 2 },
  )
).toBe(false);

expect(
  run(
    [
      { x: 1, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 5 },
      { x: 6, y: 3 },
      { x: 5, y: 0 },
    ],
    { x: 2, y: 2 },
  )
).toBe(true);

expect(
  run(
    [
      { x: 1, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 5 },
      { x: 6, y: 3 },
      { x: 5, y: 0 },
    ],
    { x: 5.5, y: 3 },
  )
).toBe(true);

expect(
  run(
    [
      { x: 1, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 5 },
      { x: 6, y: 3 },
      { x: 5, y: 0 },
    ],
    { x: 0.5, y: 0 },
  )
).toBe(false);

expect(
  run(
    [
      { x: 1, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 5 },
      { x: 6, y: 3 },
      { x: 5, y: 0 },
    ],
    { x: 1, y: 4 },
  )
).toBe(false);

expect(
  run(
    [
      { x: 1, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 5 },
      { x: 6, y: 3 },
      { x: 5, y: 0 },
    ],
    { x: 5, y: 4 },
  )
).toBe(false);

expect(
  run(
    [
      { x: 1, y: 0 },
      { x: 0, y: 3 },
      { x: 3, y: 5 },
      { x: 6, y: 3 },
      { x: 5, y: 0 },
    ],
    { x: 5.5, y: 1 },
  )
).toBe(false);
```
