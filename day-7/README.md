# Right on the target!

The competition also involves shooting contests. The shooter is preparing for his next shooting event. He knows that it
is important to determine whether he hit the target. The target is a circle of radius R centered at (0,0) on the
coordinate plane. Knowing the coordinates of the point where the arrow hits, you need to determine if the shooter hit
the target.

## Input

Object with hit coordinates and target radius:

```javascript
{ x: 8, y: 8, radius: 5 }
```

## Output

True if the target has been hit, false otherwise.

## Tests

```javascript
expect(run({ x: 3, y: 4, radius: 5 })).toBe(true);

expect(run({ x: 0, y: 0, radius: 5 })).toBe(true);

expect(run({ x: 5, y: 0, radius: 5 })).toBe(true);

expect(run({ x: 5, y: 12, radius: 10 })).toBe(false);

expect(run({ x: 9, y: 9, radius: 10 })).toBe(false);
```
