export const restrictStringCount = (value: string, count: number): string => {
  if (value.length > count) {
    const slicedValue = value.slice(0, count - 1);
    return `${slicedValue}...`;
  } else {
    return value;
  }
};
