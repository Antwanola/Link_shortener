"use strict";

import { Box } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa6";

interface Notification {}
export const Notification: React.FC<Notification> = () => {
  return (
    <Box
    display={"flex"}
      bg={"#144EE3"}
      borderWidth={1}
      borderColor={"#144EE3"}
      borderRadius={'50%'}
      padding={3}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <FaBell />
    </Box>
  );
};
