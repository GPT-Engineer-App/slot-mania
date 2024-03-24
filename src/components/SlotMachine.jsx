import React, { useState } from "react";
import { Box, Heading, Text, Button, Image, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaMinus, FaPlus, FaQuestion } from "react-icons/fa";
import SlotResult from "./SlotResult";
import PaytableModal from "./PaytableModal";

const SlotMachine = ({ name, image, balance, setBalance, minBet, maxBet, bonusGame, paytable, paylines, symbolWeights }) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [bet, setBet] = useState(minBet);
  const [freeSpins, setFreeSpins] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeBet = (amount) => {
    const newBet = bet + amount;
    if (newBet >= minBet && newBet <= maxBet) {
      setBet(newBet);
    }
  };

  const spin = () => {
    if (balance >= bet || freeSpins > 0) {
      setSpinning(true);
      if (freeSpins === 0) {
        setBalance(balance - bet);
      } else {
        setFreeSpins(freeSpins - 1);
      }
      setTimeout(() => {
        setSpinning(false);
        const reels = spinReels();
        const result = calculateResult(reels, bet, bonusGame);
        setResult(result);
        if (result.winnings > 0) {
          setBalance(balance + result.winnings);
        }
        if (result.freeSpins > 0) {
          setFreeSpins(freeSpins + result.freeSpins);
        }
      }, 1000);
    }
  };

  const spinReels = () => {
    
    const reels = [];
    for (let i = 0; i < 5; i++) {
      const reel = [];
      for (let j = 0; j < 3; j++) {
        let rand = Math.random();
        let symbol;
        for (let k = 0; k < symbolWeights.length; k++) {
          rand -= symbolWeights[k];
          if (rand < 0) {
            symbol = String.fromCharCode(65 + k);
            break;
          }
        }
        reel.push(symbol);
      }
      reels.push(reel);
    }
    return reels;
  };

  const calculateResult = (reels, bet, bonusGame) => {
    let winnings = 0;
    let freeSpins = 0;
    for (const payline of paylines) {
      const symbols = payline.map(([reel, row]) => reels[reel][row]);
      for (const [combination, value] of paytable) {
        if (symbols.slice(0, combination.length).join("") === combination) {
          winnings += value * bet;
          break;
        }
      }
    }
    if (bonusGame && reels.flat().filter((symbol) => symbol === "S").length >= 3) {
      freeSpins = 10;
    }
    return { reels, winnings, freeSpins };
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <HStack justify="space-between">
        <Heading size="md">{name}</Heading>
        <IconButton icon={<FaQuestion />} onClick={onOpen} aria-label="Paytable" variant="ghost" />
      </HStack>
      <Image src={image} alt={name} mt={4} />
      <HStack mt={4} mb={2}>
        <IconButton icon={<FaMinus />} onClick={() => changeBet(-1)} />
        <Text fontWeight="bold">${bet}</Text>
        <IconButton icon={<FaPlus />} onClick={() => changeBet(1)} />
        <Button onClick={() => setBet(maxBet)} size="sm">
          Max Bet
        </Button>
      </HStack>
      <Button onClick={spin} isLoading={spinning} colorScheme="blue" width="100%">
        {spinning ? "Spinning..." : freeSpins > 0 ? `Free Spins: ${freeSpins}` : "Spin"}
      </Button>
      {result && <SlotResult result={result} />}
      <PaytableModal isOpen={isOpen} onClose={onClose} paytable={paytable} />
    </Box>
  );
};

export default SlotMachine;
