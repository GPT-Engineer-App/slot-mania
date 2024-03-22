import React from "react";
import { Box, Heading, Button, useDisclosure } from "@chakra-ui/react";
import { FaCoins, FaCreditCard, FaBitcoin } from "react-icons/fa";
import PaymentModal from "../components/PaymentModal";
import WithdrawModal from "../components/WithdrawModal";

const Payments = ({ balance, updateBalance }) => {
  const { isOpen: isPaymentOpen, onOpen: onPaymentOpen, onClose: onPaymentClose } = useDisclosure();

  const { isOpen: isWithdrawOpen, onOpen: onWithdrawOpen, onClose: onWithdrawClose } = useDisclosure();

  return (
    <Box>
      <Heading mb={8}>Payments</Heading>

      <Box mb={8}>
        <Heading size="md" mb={4}>
          Deposit Funds
        </Heading>
        <Button leftIcon={<FaCoins />} onClick={onPaymentOpen} colorScheme="green" mr={4}>
          Cash
        </Button>
        <Button leftIcon={<FaCreditCard />} onClick={onPaymentOpen} colorScheme="blue" mr={4}>
          Credit Card
        </Button>
        <Button leftIcon={<FaBitcoin />} onClick={onPaymentOpen} colorScheme="orange">
          Crypto
        </Button>
      </Box>

      <Box mb={8}>
        <Heading size="md" mb={4}>
          Withdraw Funds
        </Heading>
        <Button onClick={onWithdrawOpen} colorScheme="red" isDisabled={balance <= 0}>
          Withdraw
        </Button>
      </Box>

      <PaymentModal isOpen={isPaymentOpen} onClose={onPaymentClose} updateBalance={updateBalance} />
      <WithdrawModal isOpen={isWithdrawOpen} onClose={onWithdrawClose} balance={balance} updateBalance={updateBalance} />
    </Box>
  );
};

export default Payments;
