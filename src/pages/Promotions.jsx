import React from "react";
import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";

const Promotions = () => {
  return (
    <Box maxW="xl" mx="auto" mt={8}>
      <Heading as="h1" mb={8}>
        Current Promotions
      </Heading>
      <Stack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">
            Welcome Bonus
          </Heading>
          <Text mt={4} fontSize="lg">
            Sign up now and get a 100% match bonus on your first deposit, up to $500!
          </Text>
          <Button mt={4} colorScheme="blue">
            Claim Bonus
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">
            Free Spins Friday
          </Heading>
          <Text mt={4} fontSize="lg">
            Deposit at least $50 on any Friday and get 50 free spins on our featured slot of the week!
          </Text>
          <Button mt={4} colorScheme="blue">
            Deposit Now
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">
            High Roller Bonus
          </Heading>
          <Text mt={4} fontSize="lg">
            Deposit $1000 or more and get a 50% match bonus, up to $500!
          </Text>
          <Button mt={4} colorScheme="blue">
            Deposit Now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Promotions;
