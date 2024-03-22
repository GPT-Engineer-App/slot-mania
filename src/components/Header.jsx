import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = ({ balance }) => {
  return (
    <Box bg="gray.900" py={4}>
      <Box maxW="6xl" mx="auto" px={4} display="flex" justifyContent="space-between" alignItems="center">
        <Heading as={Link} to="/" color="white">
          5 Gringos Slots
        </Heading>
        <Text color="white">Balance: ${balance.toFixed(2)}</Text>
      </Box>
    </Box>
  );
};

export default Header;
