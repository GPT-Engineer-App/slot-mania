import React from "react";
import { Box, Stack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" py={10}>
      <Box maxW="6xl" mx="auto" px={4}>
        <Stack direction={["column", "row"]} spacing={8} color="white" justify="center">
          <Stack spacing={4}>
            <Link href="/">Home</Link>
            <Link href="/slots">Slots</Link>
            <Link href="/promotions">Promotions</Link>
            <Link href="/vip">VIP</Link>
          </Stack>
          <Stack spacing={4}>
            <Link href="/account">My Account</Link>
            <Link href="/payments">Payments</Link>
            <Link href="/leaderboard">Leaderboard</Link>
          </Stack>
          <Stack direction="row" spacing={6}>
            <Link href="https://www.facebook.com" isExternal>
              <FaFacebook size={24} />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.instagram.com" isExternal>
              <FaInstagram size={24} />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
