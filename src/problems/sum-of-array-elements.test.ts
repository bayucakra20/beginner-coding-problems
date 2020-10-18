import { sumOfArrayElements } from './sum-of-array-elements';

describe("sum-of-array-elements", () => {
  it("Should return sum of array elements", () => {
    // Arrange
    const arr = [40, 50, 100, 500, 1000];

    // Act
    const result = sumOfArrayElements(arr);

    // Assert
    expect(result).toBe(1690);
  });
});
