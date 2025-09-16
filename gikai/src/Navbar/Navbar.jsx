import React from "react";
import { Box, Flex, IconButton, Heading, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4} py={2} shadow="sm">
      <Flex justify="space-between" align="center">
        <Heading size="md">My Website</Heading>
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
          size="lg"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;