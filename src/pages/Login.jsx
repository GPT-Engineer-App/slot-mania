import React from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username: "johndoe", email: "johndoe@example.com" });
    navigate("/account");
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Heading as="h1" mb={8}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="password" mb={8}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" width="full">
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
