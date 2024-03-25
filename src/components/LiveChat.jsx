import React, { useState } from "react";
import { Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input, Button } from "@chakra-ui/react";
import { FaComments } from "react-icons/fa";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (message.trim() !== "") {
      setChatHistory([...chatHistory, { text: message, sender: "user" }]);
      setMessage("");

      setTimeout(() => {
        setChatHistory([...chatHistory, { text: "Thank you for your message. A support representative will be with you shortly.", sender: "support" }]);
      }, 1000);
    }
  };

  return (
    <>
      <IconButton icon={<FaComments />} onClick={() => setIsOpen(true)} />
      <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Live Chat Support</DrawerHeader>
            <DrawerBody>
              <Box mb={4}>
                {chatHistory.map((chat, index) => (
                  <Box key={index} bg={chat.sender === "user" ? "blue.100" : "gray.100"} p={2} my={2} borderRadius="md">
                    {chat.text}
                  </Box>
                ))}
              </Box>
              <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." mb={2} />
              <Button onClick={handleSend} colorScheme="blue">
                Send
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default LiveChat;
