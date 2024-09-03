"use strict";

import { Box, Flex, Spacer, Stack, Switch, Text } from "@chakra-ui/react";

interface TogglePasteProp {}
export const TogglePaste: React.FC<TogglePasteProp> = () => {
  return (
    <Flex gap={5} alignItems="center" justifyContent="center">
      <Switch />
      <Text color={"white"} fontSize={10} fontWeight={100}>
        Auto paste from clipboard
      </Text>
    </Flex>
  );
};
