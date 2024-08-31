'use strict'

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegHandPointer } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import Flood from "@/app/assets/Flood.svg"
interface IconTextProps {
    icon: React.ElementType;
    text: string;
    fontSize?: number;
}

const IconText: React.FC<IconTextProps> = ({ icon: Icon, text, fontSize }) => (
    <Stack direction='row' alignItems='center' justifyContent='center' padding={2} cursor={'pointer'}>
        <Icon color='white' fontSize={fontSize || 16}/>
        <Text color='white' fontSize={fontSize || 16}>{text}</Text>
    </Stack>
);

interface PagetTableProp {}
export const PageTable: React.FC<PagetTableProp> = () => {
    return (
        <Box w='100%' bg='#181E29' h={10} mt={10}>
            <Flex alignItems='center' justifyContent='center' gap={20}>
                <IconText icon={BsClockHistory} text="History" fontSize={12}/>
                <IconText icon={IoStatsChartOutline} text="Statistics" fontSize={12} />
                <IconText icon={FaRegHandPointer} text="Click Stream" fontSize={12} />
                <IconText icon={GoGear} text="Settings" fontSize={12}/>
            </Flex>
        </Box>
    );
}
