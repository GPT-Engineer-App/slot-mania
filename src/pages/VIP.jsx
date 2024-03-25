import React from "react";
import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const VIP = () => {
  return (
    <Box maxW="3xl" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="2xl" mb={4}>
        VIP Program
      </Heading>
      <Text fontSize="xl" mb={8}>
        Join our exclusive VIP program and enjoy amazing perks and benefits! Here's what you get as a VIP member:
      </Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaStar} color="gold" />
          Exclusive access to VIP-only games and tournaments
        </ListItem>
        <ListItem>
          <ListIcon as={FaStar} color="gold" />
          Higher deposit and withdrawal limits
        </ListItem>
        <ListItem>
          <ListIcon as={FaStar} color="gold" />
          Personal account manager
        </ListItem>
        <ListItem>
          <ListIcon as={FaStar} color="gold" />
          Faster withdrawals
        </ListItem>
        <ListItem>
          <ListIcon as={FaStar} color="gold" />
          Birthday bonuses and gifts
        </ListItem>
        <ListItem>
          <ListIcon as={FaStar} color="gold" />
          Invitations to exclusive events and getaways
        </ListItem>
      </List>
      <Text fontSize="xl" mt={8}>
        To become a VIP member, simply deposit at least $1,000 in a single transaction. Your VIP status will be activated immediately!
      </Text>
    </Box>
  );
};

export default VIP;
