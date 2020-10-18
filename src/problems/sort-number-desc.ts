export const sortNumberDesc = (numbers: number[]): number[] => {
  const arrayLength = numbers.length;

  // Using bubble sort algorithm
  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (numbers[j + 1] > numbers[j]) {
        const temp = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  return numbers;
};
