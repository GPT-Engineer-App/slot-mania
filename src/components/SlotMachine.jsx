import React, { useState } from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

const SlotMachine = ({ name, image }) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setResult(Math.random() < 0.5 ? "Win!" : "Lose!");
    }, 3000);
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
