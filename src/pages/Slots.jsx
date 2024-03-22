import React, { useState } from "react";
import Nav from "../components/Nav";
import { Box, Heading, Grid } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const Slots = ({ balance, setBalance }) => {
  return (
    <Box>
      <Nav />
      <Heading mb={8}>Slot Machines</Heading>

      <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={8}>
        <SlotMachine name="Esqueleto Explosivo" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBlc3F1ZWxldG8lMjBleHBsb3Npdm98ZW58MHx8fHwxNzExMDcxNDU4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Money Train 2" image="https://images.unsplash.com/photo-1502920514313-52581002a659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBtb25leSUyMHRyYWluJTIwMnxlbnwwfHx8fDE3MTEwNzE0NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Punk Rocker" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBwdW5rJTIwcm9ja2VyfGVufDB8fHx8MTcxMTA3MTQ1OXww&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Deadwood" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBkZWFkd29vZHxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Tombstone RIP" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0b21ic3RvbmUlMjByaXB8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="The Dog House" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjBkb2clMjBob3VzZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="San Quentin" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBzYW4lMjBxdWVudGlufGVufDB8fHx8MTcxMTA3MTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="The Wild Machine" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjB3aWxkJTIwbWFjaGluZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Narcos" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBuYXJjb3N8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Fury of Ra" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBmdXJ5JTIwb2YlMjByYXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="The Dog House" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjBkb2clMjBob3VzZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="San Quentin" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBzYW4lMjBxdWVudGlufGVufDB8fHx8MTcxMTA3MTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="The Wild Machine" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjB3aWxkJTIwbWFjaGluZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Narcos" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBuYXJjb3N8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Fury of Ra" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBmdXJ5JTIwb2YlMjByYXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" balance={balance} setBalance={setBalance} minBet={0.2} maxBet={100} />
        <SlotMachine name="Mayan Treasures" image="https://example.com/mayan-treasures.jpg" balance={balance} setBalance={setBalance} minBet={0.1} maxBet={50} bonusGame />
        <SlotMachine name="Dragon's Hoard" image="https://example.com/dragons-hoard.jpg" balance={balance} setBalance={setBalance} minBet={0.5} maxBet={200} />
        <SlotMachine name="Galactic Odyssey" image="https://example.com/galactic-odyssey.jpg" balance={balance} setBalance={setBalance} minBet={0.25} maxBet={75} bonusGame />
        <SlotMachine name="Enchanted Forest" image="https://example.com/enchanted-forest.jpg" balance={balance} setBalance={setBalance} minBet={0.15} maxBet={60} />
      </Grid>
    </Box>
  );
};

export default Slots;
