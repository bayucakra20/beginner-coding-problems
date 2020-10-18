interface userObject {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export const calculateAge = (userObj: userObject, expectedDate: string): number|string => {
  const { dateOfBirth } = userObj;

  const dateStart = (new Date(dateOfBirth)).getUTCFullYear();
  const dateEnd = (new Date(expectedDate)).getUTCFullYear();

  if (dateEnd < dateStart) {
    return 'invalid date';
  }

  const age = dateEnd - dateStart;

  return age;
};

