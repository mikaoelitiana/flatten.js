const flatten = require('./flatten');

test('flatten nested array', () => {
  expect(flatten([[1,2,[3]],4])).toEqual([1,2,3,4]);
  expect(flatten([[1],[2],[3],[4]])).toEqual([1,2,3,4]);
  expect(flatten([[1,2],[3, 4]])).toEqual([1,2,3,4]);
});

test('flatten flat array', () => {
  expect(flatten([1,2,3,4])).toEqual([1,2,3,4]);
});
