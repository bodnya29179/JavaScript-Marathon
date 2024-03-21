# How about a snack?

The marathon is already halfway over, and the participants are hungry after intense running and training. To replenish
their energy, they decide to order a fitness pizza. However, they face a difficult question: which of the fitness pizza
slices is the most favorable in terms of price and quality? By choosing the most favorable fitness pizza slice, marathon
participants will be able to get the necessary nutrients to successfully complete the event!

## Input

An array of objects, where each object represents a fitness pizza slice. Each object contains the following properties:
radius, angle and price.

```javascript
[
  { radius: 20, angle: 45, price: 10 },
  { radius: 18, angle: 40, price: 9 },
  { radius: 22, angle: 50, price: 18 },
]
```

## Output

An object representing the selected fitness pizza slice.

```javascript
{ radius: 20, angle: 45, price: 10 }
```

## Tests

```javascript
expect(
  run(
    [
      { radius: 20, angle: 45, price: 10 },
      { radius: 18, angle: 40, price: 9 },
      { radius: 22, angle: 50, price: 18 },
    ],
  )
).toEqual(
  { radius: 20, angle: 45, price: 10 },
);

expect(run([])).toBeNull();

expect(
  run(
    [
      { radius: 20, angle: 45, price: -10 },
      { radius: 18, angle: 40, price: 9 },
      { radius: 22, angle: 50, price: 18 },
    ],
  )
).toEqual(
  { radius: 18, angle: 40, price: 9 },
);

expect(
  run(
    [
      { radius: 20, angle: 45, price: 10 },
      { radius: 18, angle: 40, price: 0 },
      { radius: 22, angle: 50, price: 18 },
    ],
  )
).toEqual(
  { radius: 18, angle: 40, price: 0 },
);
```
