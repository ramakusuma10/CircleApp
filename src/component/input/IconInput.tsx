import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'


interface IconInputProps<T extends FieldValues> {
    icon: ReactNode
    name: Path<T>
    placeholder: string
    type: string
    register: UseFormRegister<T>
}
function IconInput<T extends FieldValues>(props: IconInputProps<T>) {
    const { icon, type, placeholder, name, register } = props
    return (
        <Box px={'15px'}>
            <Stack spacing={4}>
                <InputGroup color={'circle-dark'}>
                    <InputLeftElement pointerEvents={'none'} color={'circle.dark'}>
                        <Box ml={'15px'}>
                            {icon}
                        </Box>
                    </InputLeftElement>
                    <Input
                        type={type}
                        pl={'38px'}
                        placeholder={placeholder}
                        border={'2px'}
                        borderColor={'transparent'}
                        borderRadius={'2xl'}
                        bg={'circle.darker'}
                        color={'circle.font'}
                        autoFocus
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
                        {...register(name)}
                    />
                </InputGroup>
            </Stack>
        </Box>
    )
}

export default IconInput