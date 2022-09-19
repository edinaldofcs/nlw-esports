// [1, 2, 3] -> 1,2,3

export function convertArrayToString(arrayString: string[]) {
  const newString = arrayString.join(",");

  return newString;
}
