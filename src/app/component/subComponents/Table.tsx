'use strict'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

interface TbaleProps {}
export const Tables: React.FC<TbaleProps> = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead bg={'#0D1117'}  >
                    <Tr border="none">
                        <Th border="none" color={'#C9CED6'}>Short Link</Th>
                        <Th border="none" color={'#C9CED6'}>Original Link</Th>
                        <Th border="none" isNumeric color={'#C9CED6'}>QR Codes</Th>
                        <Th border="none" isNumeric color={'#C9CED6'}>Clicks</Th>
                        <Th border="none" isNumeric color={'#C9CED6'}>Status</Th>
                        <Th border="none" isNumeric color={'#C9CED6'}>Date</Th>
                        <Th border="none" isNumeric color={'#C9CED6'}>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr
                        bg={'#181E29'}
                        mb={10}
                        h={'auto'}
                        color={'#C9CED6'}
                        boxShadow={'0px 4px 10px 0px rgba(0, 0, 0, 0.10)'}
                        borderBottom="4px"
                        borderColor={'#0E131E'}
                        _hover={{
                            bg: '#1C283F'
                        }}
                    >
                        <Td border="none">inches</Td>
                        <Td border="none">millimetres (mm)</Td>
                        <Td border="none" isNumeric>25.4</Td>
                        <Td border="none" isNumeric>25.4</Td>
                        <Td border="none" isNumeric>25.4</Td>
                        <Td border="none" isNumeric>25.4</Td>
                        <Td border="none" isNumeric>25.4</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr border="none">
                        <Th border="none">To convert</Th>
                        <Th border="none">into</Th>
                        <Th border="none" isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
