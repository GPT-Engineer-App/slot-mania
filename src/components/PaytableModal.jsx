import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const PaytableModal = ({ isOpen, onClose, paytable }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Paytable</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Table>
            <Thead>
              <Tr>
                <Th>Combination</Th>
                <Th>Payout</Th>
              </Tr>
            </Thead>
            <Tbody>
              {paytable.map(([combination, value], index) => (
                <Tr key={index}>
                  <Td>{combination}</Td>
                  <Td>{value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
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
