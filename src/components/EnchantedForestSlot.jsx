import React from "react";
import SlotMachine from "./SlotMachine";

const EnchantedForestSlot = ({ balance, setBalance }) => {
  return (
    <SlotMachine
      name="Enchanted Forest"
      image="https://example.com/enchanted-forest.jpg"
      balance={balance}
      setBalance={setBalance}
      minBet={0.15}
      maxBet={60}
      paytable={[
        ["AAA", 80],
        ["BBB", 40],
        ["CCC", 20],
        ["DDD", 10],
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
      symbolWeights={[0.35, 0.3, 0.2, 0.15]}
    />
  );
};

export default EnchantedForestSlot;
