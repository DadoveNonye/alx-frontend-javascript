import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    if (typeof range !== "string" || range.trim() === "") {
      throw new Error("range must be a non-empty string");
    }

    this._range = range.trim();
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
