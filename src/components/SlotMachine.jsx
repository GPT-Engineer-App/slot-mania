import React, { useState } from "react";
import { Box, Heading, Text, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import SlotResult from "./SlotResult";

const SlotMachine = ({ name, image, balance, setBalance, minBet, maxBet, bonusGame }) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [bet, setBet] = useState(minBet);

  const changeBet = (amount) => {
    const newBet = bet + amount;
    if (newBet >= minBet && newBet <= maxBet) {
      setBet(newBet);
    }
  };

  const spin = () => {
    if (balance >= bet) {
      setSpinning(true);
      setBalance(balance - bet);
      setTimeout(() => {
        setSpinning(false);
        const reels = spinReels();
        const result = calculateResult(reels, bet, bonusGame);
        setResult(result);
        if (result.winnings > 0) {
          setBalance(balance + result.winnings);
        }
      }, 1000);
    }
  };

  const spinReels = () => {
    const symbols = ["A", "B", "C", "D", "E"];
    const reels = [];
    for (let i = 0; i < 3; i++) {
      const reel = [];
      for (let j = 0; j < 3; j++) {
        reel.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      reels.push(reel);
    }
    return reels;
  };

  const calculateResult = (reels, bet, bonusGame) => {
    const lines = [
      [reels[0][0], reels[1][0], reels[2][0]],
      [reels[0][1], reels[1][1], reels[2][1]],
      [reels[0][2], reels[1][2], reels[2][2]],
      [reels[0][0], reels[1][1], reels[2][2]],
      [reels[0][2], reels[1][1], reels[2][0]],
    ];
    const winningLines = lines.filter((line) => line.every((symbol) => symbol === line[0]));
    const winnings = winningLines.length * bet;
    let message = winnings > 0 ? `Win $${winnings}!` : "Lose!";
    if (bonusGame && Math.random() < 0.1) {
      message += " Bonus game triggered!";
    }
    return { reels, winnings, message };
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <Heading size="md">{name}</Heading>
      <Image src={image} alt={name} mt={4} />
      <HStack mt={4} mb={2}>
        <IconButton icon={<FaMinus />} onClick={() => changeBet(-1)} />
        <Text fontWeight="bold">${bet}</Text>
        <IconButton icon={<FaPlus />} onClick={() => changeBet(1)} />
      </HStack>
      <Button onClick={spin} isLoading={spinning} colorScheme="blue" width="100%">
        {spinning ? "Spinning..." : "Spin"}
      </Button>
      {result && <SlotResult result={result} />}
    </Box>
  );
};

export default SlotMachine;
