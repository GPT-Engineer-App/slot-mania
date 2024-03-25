import React from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const createUser = (username, email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), username, email });
    }, 1000);
  });
};

const Register = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    createUser(username, email, password).then((user) => {
      setUser(user);
      navigate("/account");
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Heading as="h1" mb={8}>
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" mb={4} isRequired>
          <FormLabel>Username</FormLabel>
          <Input name="username" type="text" />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" />
        </FormControl>
        <FormControl id="password" mb={8} isRequired>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" width="full">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
