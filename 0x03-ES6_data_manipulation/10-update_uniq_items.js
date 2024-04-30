export default function updateUniqueItems(map) {
  if (!map instanceof Map) {
    throw new TypeError("Argument must be a Map");
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
