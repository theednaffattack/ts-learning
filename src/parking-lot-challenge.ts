class ParkingLot {
  slots: string[] = [];
  constructor(parkingSize: number) {
    this.slots = new Array(parkingSize).fill(null);
  }

  /**
   * A method that shows us how many available slots we currently have
   */
  getAvailable() {}

  /**
   * A helper method that we use to check the parking lot size.
   */
  getSize() {}

  /**
   * Helper method that just returns the array we use to store the parking slots.
   */
  getSlots() {}

  /** Tells us if the parking lot is full,
   * that is that there are no more available slots. */
  isAvailable() {}

  /**
   * This method iterates over the slots array, checks if there are free
   * spots (that is, slots that are still equal to null), and adds in
   * the car in those empty spots.
   */
  park() {}

  /**
   * This is how we remove cars from the parking lot.
   * This method also iterates over the slots array
   */
  remove() {}
}
