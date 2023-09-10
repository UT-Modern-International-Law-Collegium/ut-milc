const sliceListByNumber = <T>(list: T[], number: number): T[][] => {
  const length: number = Math.ceil(list.length / number);
  let listGroup: T[][] = [];
  [...Array(length)].forEach((_, i: number) => {
    const tmpList: T[] = list.slice(i * number, (i + 1) * number);
    listGroup.push(tmpList);
  });

  return listGroup;
};

export { sliceListByNumber };
