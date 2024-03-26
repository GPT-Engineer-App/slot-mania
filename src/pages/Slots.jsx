import React from "react";
import { Box, Heading, Grid, Text } from "@chakra-ui/react";
import Nav from "../components/Nav";
import SlotMachine from "../components/SlotMachine";

const Slots = ({ balance, setBalance }) => {
  return (
    <Box>
      <Heading mb={8}>Slot Machines</Heading>
      <Nav />
      <Heading size="lg" mb={8}>
        Choose a Slot Machine
      </Heading>
      <Text mb={8}>We have a variety of engaging slot machines to play. Select one below and start spinning!</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} mb={12}>
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
        <SlotMachine
          name="Dragon's Hoard"
          image="https://example.com/dragons-hoard.jpg"
          balance={balance}
          setBalance={setBalance}
          minBet={0.5}
          maxBet={200}
          paytable={[
            ["AAA", 200],
            ["BBB", 100],
            ["CCC", 50],
            ["DDD", 25],
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
        <SlotMachine
          name="Dragon's Hoard"
          image="https://example.com/dragons-hoard.jpg"
          balance={balance}
          setBalance={setBalance}
          minBet={0.5}
          maxBet={200}
          paytable={[
            ["AAA", 200],
            ["BBB", 100],
            ["CCC", 50],
            ["DDD", 25],
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
        <SlotMachine
          name="Esqueleto Explosivo"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBlc3F1ZWxldG8lMjBleHBsb3Npdm98ZW58MHx8fHwxNzExMDcxNDU4fDA&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.1}
          maxBet={50}
          paytable={[
            ["AAA", 100],
            ["BBB", 50],
            ["CCC", 25],
            ["DDD", 10],
          ]}
          paylines={[
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
          ]}
          symbolWeights={[0.4, 0.3, 0.2, 0.1]}
        />
        <SlotMachine
          name="Money Train 2"
          image="https://images.unsplash.com/photo-1502920514313-52581002a659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBtb25leSUyMHRyYWluJTIwMnxlbnwwfHx8fDE3MTEwNzE0NTl8MA&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.2}
          maxBet={100}
          paytable={[
            ["AAA", 150],
            ["BBB", 75],
            ["CCC", 40],
            ["DDD", 20],
          ]}
          paylines={[
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
          ]}
          symbolWeights={[0.35, 0.3, 0.2, 0.15]}
        />
        <SlotMachine
          name="Punk Rocker"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBwdW5rJTIwcm9ja2VyfGVufDB8fHx8MTcxMTA3MTQ1OXww&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.25}
          maxBet={125}
          paytable={[
            ["AAA", 80],
            ["BBB", 40],
            ["CCC", 20],
            ["DDD", 10],
          ]}
          paylines={[
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 1],
            [4, 0],
          ]}
          symbolWeights={[0.4, 0.3, 0.2, 0.1]}
        />
        <SlotMachine
          name="Deadwood"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBkZWFkd29vZHxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.5}
          maxBet={250}
          paytable={[
            ["AAA", 400],
            ["BBB", 200],
            ["CCC", 100],
            ["DDD", 50],
          ]}
          paylines={[
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
          ]}
          symbolWeights={[0.3, 0.25, 0.25, 0.2]}
        />
        <SlotMachine
          name="Tombstone RIP"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0b21ic3RvbmUlMjByaXB8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.1}
          maxBet={50}
          paytable={[
            ["AAA", 100],
            ["BBB", 50],
            ["CCC", 25],
            ["DDD", 10],
          ]}
          paylines={[
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
          ]}
          symbolWeights={[0.4, 0.3, 0.2, 0.1]}
        />
        <SlotMachine
          name="The Dog House"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjBkb2clMjBob3VzZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
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
        <SlotMachine
          name="San Quentin"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBzYW4lMjBxdWVudGlufGVufDB8fHx8MTcxMTA3MTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.5}
          maxBet={250}
          paytable={[
            ["AAA", 200],
            ["BBB", 100],
            ["CCC", 50],
            ["DDD", 25],
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
          ]}
          symbolWeights={[0.4, 0.3, 0.2, 0.1]}
        />
        <SlotMachine
          name="The Wild Machine"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjB3aWxkJTIwbWFjaGluZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.1}
          maxBet={50}
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
          ]}
          symbolWeights={[0.4, 0.3, 0.2, 0.1]}
        />
        <SlotMachine
          name="Narcos"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBuYXJjb3N8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080"
          balance={balance}
          setBalance={setBalance}
          minBet={0.25}
          maxBet={125}
          paytable={[
            ["AAA", 150],
            ["BBB", 75],
            ["CCC", 40],
            ["DDD", 20],
          ]}
          paylines={[
            [
              [0, 0],
              [1, 1],
              [2, 2],
              [3, 1],
              [4, 0],
            ],
          ]}
          symbolWeights={[0.4, 0.3, 0.2, 0.1]}
        />
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
        <SlotMachine
          name="The Dog House"
          image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjBkb2clMjBob3VzZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080"
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
        <SlotMachine name="San Quentin" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBzYW4lMjBxdWVudGlufGVufDB8fHx8MTcxMTA3MTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="The Wild Machine" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjB0aGUlMjB3aWxkJTIwbWFjaGluZXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <SlotMachine name="Narcos" image="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBuYXJjb3N8ZW58MHx8fHwxNzExMDcxNDYwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
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
        <SlotMachine
          name="Dragon's Hoard"
          image="https://example.com/dragons-hoard.jpg"
          balance={balance}
          setBalance={setBalance}
          minBet={0.5}
          maxBet={200}
          paytable={[
            ["AAA", 200],
            ["BBB", 100],
            ["CCC", 50],
            ["DDD", 25],
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
      </Grid>
    </Box>
  );
};

export default Slots;
