export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== "string" || brand.trim() === "") {
      throw new Error("brand must be a non-empty string");
    }
    if (typeof motor !== "string" || motor.trim() === "") {
      throw new Error("motor must be a non-empty string");
    }
    if (typeof color !== "string" || color.trim() === "") {
      throw new Error("color must be a non-empty string");
    }

    this._brand = brand.trim();
    this._motor = motor.trim();
    this._color = color.trim();
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
