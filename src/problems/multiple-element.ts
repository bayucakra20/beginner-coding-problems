export const multipleElement = (elements: number[]): number[] => {
  const multipledElement = elements.map((element) => Math.pow(element, 2));

  return multipledElement;
};

