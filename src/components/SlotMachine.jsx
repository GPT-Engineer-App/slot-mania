import React, { useState } from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const SlotMachine = ({ name, image, balance, setBalance, minBet, maxBet, bonusGame }) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [bet, setBet] = useState(minBet);

  const spin = () => {
    if (balance >= bet) {
      setSpinning(true);
      setBalance(balance - bet);
      setTimeout(() => {
        setSpinning(false);
        const symbols = ["A", "B", "C", "D", "E"];
        const reels = [
          [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
          [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
          [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
        ];
        const lines = [
          [reels[0][0], reels[1][0], reels[2][0]],
          [reels[0][1], reels[1][1], reels[2][1]],
          [reels[0][2], reels[1][2], reels[2][2]],
          [reels[0][0], reels[1][1], reels[2][2]],
          [reels[0][2], reels[1][1], reels[2][0]],
        ];
        const winningLines = lines.filter((line) => line.every((symbol) => symbol === line[0]));
        const winnings = winningLines.length * bet;
        if (winnings > 0) {
          setBalance(balance + winnings);
          setResult(`Win $${winnings}!`);
          if (bonusGame && Math.random() < 0.1) {
            setResult(`Win $${winnings}! Bonus game triggered!`);
          }
        } else {
          setResult("Lose!");
        }
      }, 3000);
    }
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <Heading size="md">{name}</Heading>
      <Image src={image} alt={name} mt={4} />
      <Button onClick={spin} isLoading={spinning} colorScheme="blue" mt={4}>
        {spinning ? "Spinning..." : "Spin"}
      </Button>
      {result && <Text mt={2}>{result}</Text>}
    </Box>
  );
};

export default SlotMachine;
