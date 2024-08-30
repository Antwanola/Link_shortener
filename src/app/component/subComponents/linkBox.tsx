"use strict";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Icon,
  Img,
  Input,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import linkIcon from "@/app/assets/linkIcon.svg";
import { LinkIcon } from "@chakra-ui/icons";

interface LinkBoxProps {}

export const LinkBox: React.FC<LinkBoxProps> = () => {
  const display = useBreakpointValue({ base: "none", md: "block" });
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        marginY={"20px"}
        marginX={"30px"}
        textColor={"gray"}
      >
       
        <Box>
          <Flex
            bg={"#181E29"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderWidth={2}
            borderColor={"#353C4A"}
            rounded={48}
            paddingRight={1}
            paddingLeft={3}
            width={600}
            paddingY={1}
          >
            <Image src={linkIcon} width={20} alt="link" />
            <Input
              rounded={48}
              display={display}
              placeholder="paste your link here"
              width={400}
              fontSize={10}
              borderWidth={0}
              focusBorderColor="transparent"
            />
            <Spacer />
            <Button
              alignSelf={"end"}
              rounded={48}
              fontSize={14}
              fontWeight={600}
              color={"white"}
              bg={"#144EE3"}
            >
              {" "}
              Shorten Now
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
