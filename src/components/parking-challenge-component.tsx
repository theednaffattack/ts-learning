import React, { useEffect, useState } from "react";
import { ParkingLot as ParkingLotClass } from "../parking-lot";
import produce from "immer";
import { generatePlateNumber } from "../util/generate-plate-number";

const ROW_LIMIT = 4;
const SLOTS_COUNT = 17;

const initialState = {
  slots: new Array(SLOTS_COUNT).fill(null),
};

type Slot = string | null;

export default function ParkingChallengeComponent() {
  const [parkingLot, setParkingLot] = useState<Slot[]>([]);

  useEffect(() => {
    setParkingLot(initialState.slots);
  }, [SLOTS_COUNT]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
          gap: "1em 1em",
        }}
      >
        {parkingLot.map((slot, slotIndex) => {
          return (
            <button
              type="button"
              key={slot ? `${slot}-${slotIndex}` : `empty-${slotIndex}`}
              style={{
                backgroundColor: "peachpuff",
              }}
              onClick={(evt) => {
                if (slot) {
                  removeCar(evt, {
                    carId: slot,
                    state: parkingLot,
                    setState: setParkingLot,
                  });
                }
              }}
            >
              {slot ? slot : `empty-${slotIndex}`}
            </button>
          );
        })}
      </div>
      <div>
        <button
          type="button"
          onClick={(parkClick) =>
            handlePark(parkClick, {
              carId: generatePlateNumber(),
              setState: setParkingLot,
              state: parkingLot,
            })
          }
        >
          {parkingLot.every((slot) => slot !== null) ? "LOT IS FULL" : "PARK"}
        </button>
      </div>
    </div>
  );

  function handlePark(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    {
      carId,
      setState,
      state,
    }: {
      carId: string;
      setState: React.Dispatch<React.SetStateAction<Slot[]>>;
      state: Slot[];
    }
  ) {
    evt.preventDefault();

    const nullIndex = state.indexOf(null);

    const nextState = produce(state, (draftState) => {
      draftState[nullIndex] = carId;
    });
    setState(nextState);
  }

  function removeCar(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    {
      carId,
      state,
      setState,
    }: {
      carId: string;
      setState: React.Dispatch<React.SetStateAction<Slot[]>>;
      state: Slot[];
    }
  ) {
    evt.preventDefault();
    const where = state.findIndex((slot) => slot === carId);
    const nextState = produce(state, (draftState) => {
      draftState[where] = null;
    });
    setState(nextState);
  }
}
