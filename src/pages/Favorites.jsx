import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const Favorites = ({ favorites }) => {
  return (
    <Box>
      <Heading mb={8}>Favorite Slots</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {favorites.map((slot) => (
          <SlotMachine key={slot.name} {...slot} />
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
