import 'react-native';

const sum = (a: number, b: number): number => {
  return a + b;
};

test('adds properly', () => {
  expect(sum(10, 20)).toBe(30);
});
