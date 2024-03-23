import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";

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
      <Text mt={4} fontWeight="bold">
        {result.message}
      </Text>
    </Box>
  );
};

export default SlotResult;
