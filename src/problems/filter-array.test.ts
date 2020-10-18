import { filterArray } from './filter-array';

describe("filter-array", () => {
  it("Should return only fruits", () => {
    // Arrange
    const arr: string[] = ["car", "bus", "train", "apple"];

    // Act
    const result = filterArray(arr);

    // Assert
    expect(result).toEqual(["apple"]);
  });
});
