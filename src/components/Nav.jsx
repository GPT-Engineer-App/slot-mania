import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Box bg="gray.700">
      <Box maxW="6xl" mx="auto" px={4}>
        <Stack direction="row" spacing={8} py={4}>
          <NavLink to="/" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)}>
            Home
          </NavLink>
          <NavLink to="/slots" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)}>
            Slots
          </NavLink>
          <NavLink to="/payments" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : undefined)}>
            Payments
          </NavLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default Nav;
