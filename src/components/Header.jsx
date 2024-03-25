import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = ({ user, balance }) => {
  return (
    <Box bg="gray.900" py={4}>
      <Box maxW="6xl" mx="auto" px={4} display="flex" justifyContent="space-between" alignItems="center">
        <Heading as={Link} to="/" color="white">
          Double Diamond Casino
        </Heading>
        <Box>
          {user ? (
            <>
              <Text color="white" mr={4} display="inline-block">
                Welcome, {user.username}
              </Text>
              <Button as={Link} to="/account" colorScheme="blue" mr={4}>
                Account
              </Button>
              <Text color="white" display="inline-block">
                Balance: ${balance.toFixed(2)}
              </Text>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" colorScheme="blue" mr={4}>
                Login
              </Button>
              <Button as={Link} to="/register" colorScheme="green" mr={4}>
                Sign Up
              </Button>
              <Button as={Link} to="/promotions" colorScheme="orange">
                Promotions
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
