export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    throw new TypeError("length must be a positive integer");
  }
  if (typeof position !== "number" || !Number.isInteger(position)) {
    throw new TypeError("position must be an integer");
  }
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    value < -128 ||
    value > 127
  ) {
    throw new TypeError("value must be an integer between -128 and 127");
  }
  if (position >= length) {
    throw new Error("Position outside range");
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
