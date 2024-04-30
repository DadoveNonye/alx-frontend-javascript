export default function hasValuesFromArray(set, arr) {
  if (!set instanceof Set || !Array.isArray(arr)) {
    throw new TypeError("Arguments must be a Set and an Array");
  }

  return arr.every((element) => set.has(element));
}
