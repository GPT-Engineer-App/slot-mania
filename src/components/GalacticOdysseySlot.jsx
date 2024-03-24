import React from "react";
import SlotMachine from "./SlotMachine";

const GalacticOdysseySlot = ({ balance, setBalance }) => {
  return (
    <SlotMachine
      name="Galactic Odyssey"
      image="https://example.com/galactic-odyssey.jpg"
      balance={balance}
      setBalance={setBalance}
      minBet={0.25}
      maxBet={75}
      bonusGame
      paytable={[
        ["AAA", 150],
        ["BBB", 75],
        ["CCC", 40],
        ["DDD", 20],
        ["EEE", 10],
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
      ]}
      symbolWeights={[0.3, 0.25, 0.2, 0.15, 0.1]}
    />
  );
};

export default GalacticOdysseySlot;
