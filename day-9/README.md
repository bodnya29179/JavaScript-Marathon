# The way to victory

This year, the marathon organizers have proposed a new route with different control points, and they want to determine
the shortest route that will pass all the control points exactly once. Each checkpoint is connected to every other
checkpoint by a certain distance. The participant can start and finish at any of the different points, but they must
visit each point exactly once. What is the shortest distance they can travel to achieve this?
For example, with the following distances between control points: A to B = 7 km; A to C = 12 km; B to C = 6 km;

```text
      A
     / \
    /   \
   /     \
  /       \
 /         \
B-----------C
```

So, the possible routes are as follows: Possible routes:

- A -> B -> C = 13 km
- A -> C -> B = 18 km
- B -> A -> C = 19 km
- B -> C -> A = 18 km
- C -> A -> B = 19 km
- C -> B -> A = 13 km

The shortest of them all: A -> B -> C = 13 km.

## Input

Coordinates of the start and end points of the potential race route. Coordinates of the start and end points of the
highway.

```javascript
const distances = [
  [0, 7, 12],
  [7, 0, 6],
  [12, 6, 0],
];
```

Where distances[i][j] represents shortest distance to go from i to j.

## Output

The length of the shortest route (number).

## Tests

```javascript
expect(
  run(
    [
      [0, 7, 12],
      [7, 0, 6],
      [12, 6, 0],
    ],
  )
).toBe(13);

expect(
  run(
    [
      [0, 10, 15, 20],
      [10, 0, 35, 25],
      [15, 35, 0, 30],
      [20, 25, 30, 0],
    ],
  )
).toBe(50);

expect(
  run(
    [
      [0, 10, 14, 16, 13],
      [10, 0, 12, 20, 17],
      [14, 12, 0, 11, 15],
      [16, 20, 11, 0, 18],
      [13, 17, 15, 18, 0],
    ],
  )
).toBe(46);
```
