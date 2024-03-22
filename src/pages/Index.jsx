import React, { useState } from "react";
import Nav from "../components/Nav";
import { Box, Heading, Text, Button, Image, Grid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, useToast } from "@chakra-ui/react";
import { FaCoins, FaCreditCard, FaBitcoin } from "react-icons/fa";

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

const PaymentModal = ({ isOpen, onClose }) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Payment Processed.",
      description: "Your deposit was successful.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deposit Funds</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input type="number" placeholder="Enter amount" />
            </FormControl>
            <Button type="submit" colorScheme="blue" mt={4}>
              Process Payment
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Index = ({ balance, setBalance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Nav />
      <Heading mb={8}>5 Gringos Slot Machines</Heading>

      <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={8}>
        <SlotMachine name="Esqueleto Explosivo" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBlc3F1ZWxldG8lMjBleHBsb3Npdm98ZW58MHx8fHwxNzExMDcxNDU4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Money Train 2" image="https://images.unsplash.com/photo-1502920514313-52581002a659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBtb25leSUyMHRyYWluJTIwMnxlbnwwfHx8fDE3MTEwNzE0NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Punk Rocker" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBwdW5rJTIwcm9ja2VyfGVufDB8fHx8MTcxMTA3MTQ1OXww&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Deadwood" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBkZWFkd29vZHxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Tombstone RIP" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0b21ic3RvbmUlMjByaXB8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080" balance={balance} setBalance={setBalance} />
      </Grid>

      <Button onClick={onOpen} leftIcon={<FaCoins />} colorScheme="green" size="lg">
        Deposit Funds
      </Button>

      <PaymentModal isOpen={isOpen} onClose={onClose} setBalance={setBalance} />
    </Box>
  );
};

export default Index;
