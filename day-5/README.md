# Bicycle triangles

The organizers are preparing to hold a cycling competition where participants compete on a track forming a triangle. You
have three competitors, each of whom starts the race from a different starting position. Your task is to write a
function that checks whether it is possible for each participant to cover the distance to the neighboring participants,
creating a triangle. The function takes three arguments - the distances that each participant must travel. If it is
possible to create a route, the function returns true, otherwise it returns false.

## Input

```text
      A
     / \
    /   \
   /     \
  /       \
 /         \
B-----------C
```

- distance AB - The distance between participant A and participant B.
- distance BC - The distance between participant B and participant C.
- distance CA - The distance between participant C and participant A.

## Output

True if it is possible to create a route, false otherwise.

## Tests

```javascript
expect(run(3, 4, 5)).toBe(true);

expect(run(1, 2, 10)).toBe(false);

expect(run(5, 5, 10)).toBe(false);

expect(() => run(-3, 4, 5)).toThrow();

expect(() => run(0, 4, 5)).toThrow();
```
