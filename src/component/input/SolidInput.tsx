import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { fontSizing} from '../../styles/style'
import { Box,Input,Collapse,Text } from '@chakra-ui/react'

interface SolidInputProps<T extends FieldValues> {
    name: Path<T>
    type: string
    placeholder: string
    value?: string
    register: UseFormRegister<T>
    error: FieldError | undefined 
    
}

function SolidInput<T extends FieldValues>(props: SolidInputProps<T>) {
    const { type, placeholder, value, name, error, register } = props
    const isCollapsed = error ? true : false

    return (
        <Box>
            
            <Input
                type={type}
                variant={'filled'}
                px={'15px'}
                bg={'circle.darker'}
                borderRadius={'lg'}
                placeholder={placeholder}
                value={value}
                fontSize={fontSizing.small}
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
                {...register(name)}
                />
                <Collapse in={isCollapsed} transition={{ enter: { duration: 0.5 } }}>
                    <Text mt={'8px'} color={'circle.error'}>
                        {error && error.message}
                    </Text>
                </Collapse>
        </Box>
    )
}

export default SolidInput