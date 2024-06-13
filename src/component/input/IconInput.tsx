import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { BiSearchAlt } from 'react-icons/bi'

function IconInput() {
    return (
        <Box px={'1rem'}>
            <Stack spacing={4}>
                <InputGroup color={'circle-dark'}>
                    <InputLeftElement pointerEvents={'none'} color={'circle.dark'}>
                        <Box ml={'15px'}>
                            <BiSearchAlt />
                        </Box>
                    </InputLeftElement>
                    <Input
                        type="text"
                        pl={'38px'}
                        placeholder="Search.."
                        border={'2px'}
                        borderColor={'transparent'}
                        borderRadius={'2xl'}
                        bg={'circle.darker'}
                        color={'circle.font'}
                        _active={{
                            background: 'none',
                            boxShadow: 'none',
                            borderColor: 'circle.green',
                        }}
                        _focus={{
                            background: 'none',
                            boxShadow: 'none',
                            borderColor: 'circle.green',
                        }}
                        _hover={{
                            background: 'none',
                            boxShadow: 'none',
                            borderColor: 'circle.green',
                        }}
                        _placeholder={{ color: 'circle.dark' }}
                    />
                </InputGroup>
            </Stack>
        </Box>
    )
}

export default IconInput