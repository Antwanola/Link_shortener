"use strict";

import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Icon, Text, Box } from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegHandPointer } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import Flood from "@/app/assets/Flood.svg";
import { Tables } from "./subComponents/Table";

interface IconTextProp {
icon: React.ElementType
text: string
fontSize ?: number
}
const IconText: React.FC<IconTextProp> = ({ icon: Icon, text, fontSize}) => {
  return (
    <>
      <Icon color="white"  fontSize={ fontSize || 16} />
      <Text color="white" fontSize={ fontSize || 16}>{text}</Text>
    </>
  )
}
interface TabProps { }
export const Tabb: React.FC<TabProps> = () => {
  interface TabArray {
    text: string
    icon: React.ElementType
  }
  const TabData: Array<TabArray> = [
    {text:'History', icon: BsClockHistory},
    {text:'Statistics', icon: IoStatsChartOutline},
    {text:'Click Stream', icon: FaRegHandPointer},
    {text:'Settings', icon: GoGear}
  ]
  // {TabData.map((data, index) =>(
  //   <IconText key={index} icon={data.icon} text={data.text}/>
  // ))}
  return (
    <Box mt={10}>
      <Tabs variant='unstyled' >
      <TabList mb={'1em'} color={'white'} bgColor={'#181E29'}  alignItems={'center'} justifyContent={'center'} gap={20}>
        {TabData.map((data, index) =>(
          <>
          <Tab gap={5} 
        alignItems="baseline"
        justifyContent="center"
        padding={2}
        borderBottom="2px"
        borderColor="transparent"
        cursor={"pointer"}
        _selected={{
          bgImage: `url(${Flood.src})`,
          bgRepeat: "no-repeat",
          bgSize: "cover",
          bgPosition: "center",
          borderBottomColor: '#144EE3',
        }}
        _hover={{
          bgImage: `url(${Flood.src})`,
          bgRepeat: "no-repeat",
          bgSize: "cover",
          bgPosition: "center",
          // borderBottomColor: '#144EE3', 
        }}   >
           <IconText key={index} icon={data.icon} text={data.text}/>
        </Tab>
          </>
        ))}
      </TabList>
      <TabIndicator mt={-4} height='2px' bg='#144EE3' borderRadius='1px'  />
      <TabPanels>
        <TabPanel>
          <Tables/>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </Box>
    
  );
};

// "use strict";

// import { Box, Flex, LinkBox, Stack, Text } from "@chakra-ui/react";
// import { BsClockHistory } from "react-icons/bs";
// import { IoStatsChartOutline } from "react-icons/io5";
// import { FaRegHandPointer } from "react-icons/fa6";
// import { GoGear } from "react-icons/go";
// import Flood from "@/app/assets/Flood.svg";
// import Link from "next/link";
// import { Tables } from "./subComponents/Table";
// interface IconTextProps {
//   icon: React.ElementType;
//   text: string;
//   fontSize?: number;
// }

// const IconText: React.FC<IconTextProps> = ({ icon: Icon, text, fontSize }) => (
//   <LinkBox>
//     <Stack
// direction="row"
// alignItems="baseline"
// justifyContent="center"
// padding={2}
// borderBottom="2px"
// borderColor="transparent"
// cursor={"pointer"}
// _hover={{
//   bgImage: `url(${Flood.src})`,
//   bgRepeat: "no-repeat",
//   bgSize: "cover",
//   bgPosition: "center",
//   borderBottomColor: '#144EE3', // Adds white border on hover
// }}    >
//       <Icon color="white" fontSize={fontSize || 16} />
//       <Text color="white" fontSize={fontSize || 16}>
//         {text}
//       </Text>
//     </Stack>
//   </LinkBox>
// );

// interface PagetTableProp {}
// export const PageTable: React.FC<PagetTableProp> = () => {
//   return (
//     <>
//     <Box w="100%" bg="#181E29" h={'auto'} mt={10} color={"white"}>
//       <Stack direction={'row'} alignItems={'baseline'} justifyContent={'center'} gap={20} >
//         <IconText icon={BsClockHistory} text="History" fontSize={12} />
//         <IconText icon={IoStatsChartOutline} text="Statistics" fontSize={12} />
//         <IconText icon={FaRegHandPointer} text="Click Stream" fontSize={12} />
//         <IconText icon={GoGear} text="Settings" fontSize={12} />
//       </Stack>
//     </Box>

// <Box marginTop={5} paddingX={20}>
// <Tables/>
// </Box>
//     </>
//   );
// };
