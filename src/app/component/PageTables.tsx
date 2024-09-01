"use strict";

import { Box, Flex, LinkBox, Stack, Text } from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegHandPointer } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import Flood from "@/app/assets/Flood.svg";
import Link from "next/link";
interface IconTextProps {
  icon: React.ElementType;
  text: string;
  fontSize?: number;
}

const IconText: React.FC<IconTextProps> = ({ icon: Icon, text, fontSize }) => (
  <LinkBox>
    <Stack
direction="row"
alignItems="baseline"
justifyContent="center"
padding={2}
borderBottom="2px"
borderColor="transparent"
cursor={"pointer"}
_hover={{
  bgImage: `url(${Flood.src})`,
  bgRepeat: "no-repeat",
  bgSize: "cover",
  bgPosition: "center",
  borderBottomColor: '#144EE3', // Adds white border on hover
}}    >
      <Icon color="white" fontSize={fontSize || 16} />
      <Text color="white" fontSize={fontSize || 16}>
        {text}
      </Text>
    </Stack>
  </LinkBox>
);

interface PagetTableProp {}
export const PageTable: React.FC<PagetTableProp> = () => {
  return (
    <Box w="100%" bg="#181E29" h={'auto'} mt={10} color={"white"}>
      <Stack direction={'row'} alignItems={'baseline'} justifyContent={'center'} gap={20} >
        <IconText icon={BsClockHistory} text="History" fontSize={12} />
        <IconText icon={IoStatsChartOutline} text="Statistics" fontSize={12} />
        <IconText icon={FaRegHandPointer} text="Click Stream" fontSize={12} />
        <IconText icon={GoGear} text="Settings" fontSize={12} />
      </Stack>
    </Box>
  );
};
