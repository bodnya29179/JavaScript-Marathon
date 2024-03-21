# First, the gifts

It is the first day of the marathon, but we are already preparing prizes. Let's imagine that the organizers are
considering awarding the winners with gifts in the shape of a rectangular parallelepiped. The gift has specified
parameters: height, width, and length. You need to calculate how much wrapping paper is needed to wrap the gift so
that it is completely covered with paper.

## Tests

```javascript
expect(run({ w: 2, l: 3, h: 4 })).toBe(52);

expect(() => run({ w: 2, l: '3m', h: 4 })).toThrow();

expect(() => run({ w: 2, l: 3 })).toThrow();

expect(() => run({ w: null, l: 3, h: 4 })).toThrow();

expect(() => run({ w: 2, l: -3, h: 4 })).toThrow();

expect(() => run({ w: 2, l: 3, h: 0 })).toThrow();
```
