import React from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const leaderboardData = [
  { position: 1, username: "luckywinner", balance: 5480 },
  { position: 2, username: "slotking", balance: 4280 },
  { position: 3, username: "casinoqueen", balance: 3960 },
  { position: 4, username: "highroller", balance: 3100 },
  { position: 5, username: "jackpotjane", balance: 2500 },
];

const Leaderboard = () => {
  return (
    <Box maxW="xl" mx="auto" mt={8}>
      <Heading as="h1" mb={8}>
        Leaderboard
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Position</Th>
            <Th>Username</Th>
            <Th isNumeric>Balance</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leaderboardData.map((entry) => (
            <Tr key={entry.position}>
              <Td>{entry.position}</Td>
              <Td>{entry.username}</Td>
              <Td isNumeric>${entry.balance.toFixed(2)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leaderboard;
