import React from "react";
import SlotMachine from "./SlotMachine";

const MayanTreasuresSlot = ({ balance, setBalance }) => {
  return (
    <SlotMachine
      name="Mayan Treasures"
      image="https://example.com/mayan-treasures.jpg"
      balance={balance}
      setBalance={setBalance}
      minBet={0.1}
      maxBet={50}
      bonusGame
      paytable={[
        ["AAA", 75],
        ["BBB", 40],
        ["CCC", 20],
        ["DDD", 10],
        ["EEE", 5],
      ]}
      paylines={[
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
      symbolWeights={[0.3, 0.25, 0.2, 0.15, 0.1]}
    />
  );
};

export default MayanTreasuresSlot;
