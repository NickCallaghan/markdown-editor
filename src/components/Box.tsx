import React from "react";
import { Box } from "@chakra-ui/react";

export const RoundedBox = ({ children }: any) => {
  return (
    <Box p="6" my="6" bgColor="white" borderRadius="8px">
      {children}
    </Box>
  );
};
