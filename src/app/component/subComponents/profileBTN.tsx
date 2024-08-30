'use strict'

import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Flex, Text } from "@chakra-ui/react"

interface ProfileBTN {}

export const ProfileBtn: React.FC<ProfileBTN> = () => {
    return (
        <>
        <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        rounded={48}
        padding={2}
        borderWidth={.3}
        width={'15%'}
        bg={"#181E29"}
      >
        <Box alignContent={'start'}>
          <Text fontSize={8}>Welcome</Text>
          <Text fontSize={12}>Mohammed</Text>
        </Box>
        <ChevronDownIcon boxSize={6}/>
    </Flex>
        </>
    )
}