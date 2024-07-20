export default function appendToEachArrayValue(array, appendString) {
  const arraysub = [];
  for (const value of array) {
    arraysub.push(appendString + value);
  }

  return arraysub;
}
