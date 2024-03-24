import React from "react";
import { Box, Text, Grid, Heading } from "@chakra-ui/react";

const SlotResult = ({ result }) => {
  return (
    <Box mt={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {result.reels.map((reel, i) => (
          <Box key={i} bg="gray.700" p={4} textAlign="center">
            {reel.map((symbol, j) => (
              <Text key={j} fontSize="2xl">
                {symbol}
              </Text>
            ))}
          </Box>
        ))}
      </Grid>
      <Box mt={4}>
        {result.winnings > 0 ? (
          <Heading size="lg" color="green.500">
            You won ${result.winnings}!
          </Heading>
        ) : (
          <Heading size="lg" color="red.500">
            Sorry, you lost. Spin again!
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default SlotResult;
