/**
 *
 * @param list
 * @param number
 * @returns
 * @description 配列を、指定された数を単位として分割する関数
 * @example lsit=[1, 2, 3, 4, 5], number=3の時は、[[1, 2, 3], [4, 5]]が返り値
 */
export const sliceListByNumber = <T>(list: T[], number: number): T[][] => {
  const length: number = Math.ceil(list.length / number);
  let listGroup: T[][] = [];
  [...Array(length)].forEach((_, i: number) => {
    const tmpList: T[] = list.slice(i * number, (i + 1) * number);
    listGroup.push(tmpList);
  });

  return listGroup;
};
