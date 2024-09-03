"use strict";

import React from "react";
import { LinkBox } from "./subComponents/linkBox";
import logo from "@/app/assets/logo.svg";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { ProfileBtn } from "./subComponents/profileBTN";
import { Notification } from "./subComponents/Notification";
import { TogglePaste } from "./subComponents/PasteToggle";

interface HeaderProp {}

const Header: React.FC<HeaderProp> = ({}) => {
  return (
    <Stack align="center">
      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={20}
        color={"white"}
      >
        <Image src={logo} alt="logo" width={70} height={20} />
        <LinkBox />
        <ProfileBtn />
        <Notification />
      </Flex>
      <TogglePaste />
    </Stack>
  );
};

export default Header;
