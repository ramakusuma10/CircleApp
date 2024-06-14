import { fontSizing } from '../../styles/style'
import { Input } from '@chakra-ui/react'

interface BlankInputProps {
    type: string
    placeholder: string
    value?: string
}

function BlankInput({ type, placeholder,value}: BlankInputProps) {
    return (
        <Input
            type={type}
            px={'15px'}
            border={'1px'}
            borderColor={'circle.dark'}
            borderRadius={'lg'}
            placeholder={placeholder}
            fontSize={fontSizing.small}
            color={'circle.font'}
            variant={'flushed'}
            value={value}
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
    )
}

export default BlankInput
