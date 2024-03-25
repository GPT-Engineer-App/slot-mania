import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Account = ({ user, balance }) => {
  if (!user) {
    return <Text>Please log in to view your account.</Text>;
  }

  return (
    <Box maxW="xl" mx="auto" mt={8}>
      <Heading as="h1" mb={8}>
        My Account
      </Heading>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Text fontSize="xl">
          <strong>Username:</strong> {user.username}
        </Text>
        <Text fontSize="xl">
          <strong>Email:</strong> {user.email}
        </Text>
        <Text fontSize="xl">
          <strong>Balance:</strong> ${balance.toFixed(2)}
        </Text>
      </Box>
    </Box>
  );
};

export default Account;
