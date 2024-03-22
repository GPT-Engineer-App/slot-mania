import React from "react";
import { Box, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";

const Payments = ({ setBalance }) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target.amount.value);
    if (amount > 0) {
      setBalance((prevBalance) => prevBalance + amount);
      toast({
        title: "Deposit Successful",
        description: `$${amount.toFixed(2)} has been added to your balance.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="amount">
          <FormLabel>Deposit Amount</FormLabel>
          <Input type="number" step="0.01" />
        </FormControl>
        <Button type="submit" colorScheme="green" mt={4}>
          Deposit Funds
        </Button>
      </form>
    </Box>
  );
};

export default Payments;
