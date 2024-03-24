import React from "react";
import SlotMachine from "./SlotMachine";

const DragonsHoardSlot = ({ balance, setBalance }) => {
  return (
    <SlotMachine
      name="Dragon's Hoard"
      image="https://example.com/dragons-hoard.jpg"
      balance={balance}
      setBalance={setBalance}
      minBet={0.5}
      maxBet={200}
      paytable={[
        ["AAA", 200],
        ["BBB", 100],
        ["CCC", 50],
        ["DDD", 25],
      ]}
      paylines={[
        [
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
        ],
        [
          [0, 1],
          [1, 1],
          [2, 1],
          [3, 1],
          [4, 1],
        ],
        [
          [0, 2],
          [1, 2],
          [2, 2],
          [3, 2],
          [4, 2],
        ],
        [
          [0, 0],
          [1, 1],
          [2, 2],
          [3, 1],
          [4, 0],
        ],
        [
          [0, 2],
          [1, 1],
          [2, 0],
          [3, 1],
          [4, 2],
        ],
      ]}
      symbolWeights={[0.35, 0.3, 0.2, 0.15]}
    />
  );
};

export default DragonsHoardSlot;
