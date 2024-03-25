import React from "react";
import { Box, Flex, Spacer, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import LiveChat from "./LiveChat";

const Header = ({ user, balance }) => {
  return (
    <Box bg="gray.900" py={4}>
      <Flex maxW="6xl" mx="auto" px={4} align="center">
        <Link as={RouterLink} to="/">
          <Image src="/logo.png" alt="5 Gringos Casino" h={8} />
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/casino" color="white" fontWeight="bold" mx={4}>
          Casino
        </Link>
        <Link as={RouterLink} to="/live-casino" color="white" fontWeight="bold" mx={4}>
          Live Casino
        </Link>
        <Link as={RouterLink} to="/slots" color="white" fontWeight="bold" mx={4}>
          Slots
        </Link>
        <Link as={RouterLink} to="/promotions" color="white" fontWeight="bold" mx={4}>
          Promotions
        </Link>
        <Link as={RouterLink} to="/vip" color="white" fontWeight="bold" mx={4}>
          VIP
        </Link>
        <Spacer />
        <FaGlobe color="white" size={24} mx={4} />
        {user ? (
          <Box>
            <Link as={RouterLink} to="/account" color="white" fontWeight="bold" mr={4}>
              {user.username}
            </Link>
            <Box as="span" color="white">
              ${balance.toFixed(2)}
            </Box>
          </Box>
        ) : (
          <>
            <Link as={RouterLink} to="/login" color="white" fontWeight="bold" mr={4}>
              Login
            </Link>
            <Link as={RouterLink} to="/register" color="white" fontWeight="bold">
              Sign Up
            </Link>
          </>
        )}
        <LiveChat />
      </Flex>
    </Box>
  );
};

export default Header;
