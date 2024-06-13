import { fontSizing} from '../../styles/style'
import { Input } from '@chakra-ui/react'

interface SolidInputProps {
    type: string
    placeholder: string
    value?: string
}

function SolidInput({ type, placeholder, value }: SolidInputProps) {
    return (
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
        />
    )
}

export default SolidInput