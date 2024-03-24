import React from "react";
import SlotMachine from "./SlotMachine";

const FuryOfRaSlot = ({ balance, setBalance }) => {
  return (
    <SlotMachine
      name="Fury of Ra"
      image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBmdXJ5JTIwb2YlMjByYXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
      balance={balance}
      setBalance={setBalance}
      minBet={0.2}
      maxBet={100}
      paytable={[
        ["AAA", 100],
        ["BBB", 50],
        ["CCC", 25],
        ["DDD", 10],
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
      symbolWeights={[0.4, 0.3, 0.2, 0.1]}
    />
  );
};

export default FuryOfRaSlot;
