import React from "react";
import { Box, Heading, Text, Button, Image, SimpleGrid, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Box bgImage="url('https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" h="100vh" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4} textAlign="center" textShadow="0 0 20px black" color="white">
            Experience the Thrill of Double Diamond Casino
          </Heading>

          <Text fontSize="xl" textAlign="center" color="white" textShadow="0 0 10px black" mb={8}>
            Immerse yourself in a world of excitement and big wins. 5 Gringos offers the greatest selection of premium slot machines, with huge jackpots waiting to be won. Sign up now and claim your welcome bonus!
          </Text>

          <Box textAlign="center">
            <Link to="/slots">
              <Button colorScheme="green" size="lg" mr={4} shadow="lg">
                Play Slots
              </Button>
            </Link>

            <Button as={Link} to="/register" colorScheme="blue" size="lg" shadow="lg">
              Sign Up
            </Button>
          </Box>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={10} textAlign="center">
            Popular Slot Games
          </Heading>

          <SimpleGrid columns={3} spacing={10} mb={20}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1605459862899-f506150a7a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbG90JTIwbWFjaGluZSUyMGdhbWUlMjBmdXJ5JTIwb2YlMjByYXxlbnwwfHx8fDE3MTEwNzE0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fury of Ra" mb={4} borderRadius="lg" shadow="lg" />
              <Heading as="h3" size="lg" mb={2}>
                Fury of Ra
              </Heading>
              <Text fontSize="lg">Unlock the mystical treasures of ancient Egypt in this captivating slot adventure.</Text>
            </Box>

            <Box>
              <Image src="https://example.com/enchanted-forest.jpg" alt="Enchanted Forest" mb={4} borderRadius="lg" shadow="lg" />
              <Heading as="h3" size="lg" mb={2}>
                Enchanted Forest
              </Heading>
              <Text fontSize="lg">Wander into a magical woodland realm filled with whimsical wins.</Text>
            </Box>

            <Box>
              <Image src="https://example.com/galactic-odyssey.jpg" alt="Galactic Odyssey" mb={4} borderRadius="lg" shadow="lg" />
              <Heading as="h3" size="lg" mb={2}>
                Galactic Odyssey
              </Heading>
              <Text fontSize="lg">Embark on an interstellar adventure in this sci-fi slot extravaganza.</Text>
            </Box>
          </SimpleGrid>

          <Box textAlign="center">
            <Button as={Link} to="/slots" colorScheme="green" size="lg">
              Explore All Slot Games
            </Button>
          </Box>
        </Container>
      </Box>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={10} textAlign="center">
            What Our Players Say
          </Heading>

          <SimpleGrid columns={2} spacing={10} mb={20}>
            <Box bg="white" p={6} borderRadius="lg" shadow="lg">
              <Text fontSize="xl" mb={4}>
                "I've been playing at Double Diamond for months and I'm consistently impressed by the variety and quality of the slots. The bonuses and promotions are great too!"
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                - Miguel R.
              </Text>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" shadow="lg">
              <Text fontSize="xl" mb={4}>
                "Double Diamond has quickly become my go-to online casino. The user experience is top-notch and I always feel like I have a fair shot at winning big."
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                - Natalie P.
              </Text>
            </Box>

            <Box bg="white" p={6} borderRadius="lg" shadow="lg">
              <Text fontSize="xl" mb={4}>
                "I love the immersive themes and bonus features of the slots at Double Diamond. It's the most fun I've had gambling online!"
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                - Rashid S.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Ready to Win Big?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Take a shot at lady luck today. Sign up in seconds and start playing to hit the jackpot!
          </Text>
          <Button as={Link} to="/signup" colorScheme="blue" size="lg">
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
