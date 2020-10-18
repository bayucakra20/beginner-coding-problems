import { calculateAge } from './calculate-age';

describe('calculate-age', () => {
  test('should return age 30 from 1990 to 2020', () => {
    const userObj = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01T14:00:00.000Z',
    };
    const expectedDate = '2020-10-18T14:30:00.000Z';

    const result = calculateAge(userObj, expectedDate);

    expect(result).toBe(30);
  });
  
  test('should return invalid date due to expected date is less than date of birth', () => {
    const userObj = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '2020-10-18T14:30:00.000Z',
    };
    const expectedDate = '2019-10-18T14:30:00.000Z';

    const result = calculateAge(userObj, expectedDate);

    expect(result).toBe('invalid date');
  });

  test('should return age 23 from 1997 to 2020', () => {
    const userObj = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1997-09-29T00:00:00.000Z',
    };
    const expectedDate = '2020-09-29T00:00:00.000Z';

    const result = calculateAge(userObj, expectedDate);

    expect(result).toBe(23);
  });
});
