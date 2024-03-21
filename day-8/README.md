# Dangerous barriers

The race organizers are developing a route for the race in a straight run. But here's the thing, there's a straight
highway right next to it, and the organizers want to ensure the safety of the participants and avoid any possible
incidents. They are looking for a way to determine if the potential race route intersects with the highway to avoid
danger to participants and cars, and your job is to help them do that.

## Input

Coordinates of the start and end points of the potential race route. Coordinates of the start and end points of the highway.

```javascript
const route = [{ x: 0, y: 0 }, { x: 10, y: 10 }];
```

## Output

True if the routes have any intersections; false otherwise.

## Tests

```javascript
expect(
  run(
    [{ x: 10, y: 0 }, { x: 0, y: 10 }],
    [{ x: 0, y: 0 }, { x: 10, y: 10 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 0, y: 10 }, { x: 10, y: 0 }],
    [{ x: 10, y: 10 }, { x: 0, y: 0 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 0, y: 0 }, { x: 10, y: 10 }],
    [{ x: 10, y: 0 }, { x: 0, y: 10 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 10, y: 10 }, { x: 0, y: 0 }],
    [{ x: 0, y: 10 }, { x: 10, y: 0 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 1, y: 1 }, { x: 10, y: 1 }],
    [{ x: 5, y: 1 }, { x: 5, y: 10 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 1, y: 1 }, { x: 10, y: 1 }],
    [{ x: 5, y: 1 }, { x: 15, y: 1 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 1, y: 1 }, { x: 10, y: 1 }],
    [{ x: 15, y: 1 }, { x: 5, y: 1 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 5, y: 1 }, { x: 15, y: 1 }],
    [{ x: 1, y: 1 }, { x: 10, y: 1 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 5, y: 1 }, { x: 15, y: 1 }],
    [{ x: 10, y: 1 }, { x: 1, y: 1 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 1, y: 1 }, { x: 5, y: 1 }],
    [{ x: 5, y: 1 }, { x: 10, y: 1 }],
  )
).toBe(true);

expect(
  run(
    [{ x: 0, y: 0 }, { x: 5, y: 1 }],
    [{ x: 4, y: 2 }, { x: 6, y: 10 }],
  )
).toBe(false);

expect(
  run(
    [{ x: 1, y: 1 }, { x: 5, y: 1 }],
    [{ x: 10, y: 1 }, { x: 15, y: 1 }],
  )
).toBe(false);

expect(
  run(
    [{ x: 1, y: 1 }, { x: 10, y: 1 }],
    [{ x: 1, y: 2 }, { x: 10, y: 2 }],
  )
).toBe(false);
```
