import { sortNumberDesc } from './sort-number-desc';

describe('sort-number-descending', () => {
  test('should return sorted number descendingly', () => {
    const input = [5, 4, 8, 40, 100, 44];

    const result = sortNumberDesc(input);

    expect(result).toEqual([100, 44, 40, 8, 5, 4]);
  });
});
