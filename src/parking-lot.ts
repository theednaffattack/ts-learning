type SlotType = string | null;

export class ParkingLot {
  slots: SlotType[] = [];
  constructor(parkingSize: number) {
    this.slots = new Array(parkingSize).fill(null);
  }

  /**
   * A method that shows us how many available slots we currently have
   */
  getAvailable() {
    const availableSlots = this.slots.filter((slot) => slot === null).length;
    console.log(`Available parking slots: ${availableSlots}`);
    return availableSlots;
  }

  /**
   * A helper method that we use to check the parking lot size.
   */
  getSize() {
    console.log(`Parking lot size is: ${this.slots.length}`);
    return this.slots.length;
  }

  /**
   * Returns the array we use to store the parking slots.
   */
  getSlots() {
    console.log(`Parking slots: ${this.slots}`);
    return this.slots;
  }

  /**
   * Tells us if the parking lot is full,
   * that is that there are no more available slots.
   */
  isAvailable() {
    console.log(`No parking spots are available`);
  }

  /**
   * Tells us if the parking lot is full,
   * @returns boolean;
   */
  isFull() {
    console.log(
      "True / false - the parking lot is full",
      this.getAvailable() === 0
    );
    return this.getAvailable() === 0;
  }

  /**
   * This method iterates over the slots array, checks if there are free
   * spots (that is, slots that are still equal to null), and adds in
   * the car in those empty spots.
   */
  park(carId: string) {
    console.log(`Parking car: ${carId}`);
    // If we can't find an empty space return false.
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    // Iterate over our slots to match it to the prvovided carId
    // Once we find a match reassign the value at that array position to carId
    for (let slotIndex = 0; slotIndex < this.slots.length; slotIndex++) {
      const slot = this.slots[slotIndex];

      if (slot === null) {
        this.slots[slotIndex] = carId;
        return true;
      }
    }
  }

  /**
   * This is how we remove cars from the parking lot.
   * This method also iterates over the slots array
   */
  remove(carId: string) {
    console.log(`Leaving car: ${carId}`);
    // If we can't find the carId return false,
    // meaning we haven't remvoed it.
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    // Iterate over our slots to match it to carId
    // Once we find a match reassign the value at that array position to null
    for (let slotIndex = 0; slotIndex < this.slots.length; slotIndex++) {
      const slot = this.slots[slotIndex];

      if (slot === carId) {
        this.slots[slotIndex] = null;
        return true;
      }
    }
  }
}
