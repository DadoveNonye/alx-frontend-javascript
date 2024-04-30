import Building from "./5-building";
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== "number") {
      throw TypeError("floors must be a number");
    }
    this._floors = floors;
  }
  get floors() {
    return this._floors;
  }
  set floors(newFloors) {
    if (typeof newFloors !== "number") {
      throw TypeError("floors must be a number");
    }
    this._floors = newFloors;
  }
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
