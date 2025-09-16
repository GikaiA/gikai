import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

function App() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Navbar />
      <Box p={8}>
        <Text fontSize="xl">Welcome to Chakra UI v2 with dark mode!</Text>
      </Box>
    </Box>
  );
}

export default App;