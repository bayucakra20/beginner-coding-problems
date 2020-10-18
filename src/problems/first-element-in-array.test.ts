import { firstElementInArray } from './first-element-in-array';

describe("first-element-in-array", () => {
  it("Should return earliest date in array", () => {
    // Arrange
    const arr: string[] = ["2020-10-10T11:10:33.226Z", "2020-10-11T11:10:33.226Z", "2020-10-12T11:10:33.226Z"];

    // Act
    const result = firstElementInArray(arr);

    // Assert
    expect(result).toBe("2020-10-10T11:10:33.226Z");
  });
});
