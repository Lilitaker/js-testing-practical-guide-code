import { it, expect } from 'vitest';
import { add } from './math';

it('Should summarize all number values in an array', () => {
  //Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it('Should yield NaN if at least one invalid number is provided', () => {
  //Arrange
  const inputs = ['invalid', 1];

  //Act
  const result = add(inputs);

  //Assert
  expect(result).toBeNaN();
});

it('Should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it('Should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it('Should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});
