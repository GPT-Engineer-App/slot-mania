import React from "react";
import { Box, Stack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.900" py={10}>
      <Box maxW="6xl" mx="auto" px={4}>
        <Stack direction={["column", "row"]} spacing={8} color="white" justify="center">
          <Link href="/">Home</Link>
          <Link href="/slots">Slots</Link>
          <Link href="/promotions">Promotions</Link>
          <Link href="/account">My Account</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="https://www.facebook.com" isExternal>
            Facebook
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            Twitter
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            Instagram
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
