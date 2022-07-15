import { ParkingLot } from "./parking-lot.js";

const lot = new ParkingLot(22);

// getAvailable, getSize, getSlots, isAvailable, isFull, park, remove

lot.getAvailable();

lot.getSize();

lot.isAvailable();

lot.isFull();

lot.park("car-1");

lot.park("car-2");

lot.getSlots();

lot.getAvailable();

lot.isFull();

lot.remove("car-1");
