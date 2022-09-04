import React from "react";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: any;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100%" minH="100vh" bg="black" px="8" py="10">
      {children}
    </Box>
  );
};
