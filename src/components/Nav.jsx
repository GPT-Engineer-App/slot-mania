import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box bg="gray.700">
      <Box maxW="6xl" mx="auto" px={4}>
        <Stack direction="row" spacing={8} py={4}>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/slots">Slots</Link>
          <Link to="/payments">Payments</Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Nav;
