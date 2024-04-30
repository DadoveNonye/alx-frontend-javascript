export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== "number" || size <= 0) {
      throw new Error("size must be a positive number");
    }
    if (typeof location !== "string" || location.trim() === "") {
      throw new Error("location must be a non-empty string");
    }

    this._size = size;
    this._location = location.trim();
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
