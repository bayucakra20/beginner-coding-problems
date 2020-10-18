import { multipleElement } from './multiple-element';

describe('multiple-element', () => {
  test('should return correct multipled element', () => {
    const input = [4, 10, 50, 100];

    const result = multipleElement(input);

    expect(result).toEqual([16, 100, 2500, 10000]);
  });
});
