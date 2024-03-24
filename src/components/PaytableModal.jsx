import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Heading, Text, HStack } from "@chakra-ui/react";

const PaytableModal = ({ isOpen, onClose, paytable }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Paytable</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading size="md" mb={4}>
            Winning Combinations
          </Heading>
          {paytable.map(([combination, value], index) => (
            <HStack key={index} spacing={8} mb={2}>
              <Text fontSize="xl">{combination}</Text>
              <Text fontSize="xl" fontWeight="bold">
                {value}x
              </Text>
            </HStack>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaytableModal;
