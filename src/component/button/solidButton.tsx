import { Button } from '@chakra-ui/react'
import { solidButtonHover } from '../../styles/style'

interface SolidButtonProps {
    text: string
    py?: string
    onClick?: () => void
}

function SolidButton({ text, py, onClick }: SolidButtonProps) {
    return (
        <Button
            onClick={onClick}
            width={'100%'}
            borderRadius={'2xl'}
            bg={'circle.green'}
            color={'circle.font'}
            py={py ? py : undefined}
            _hover={solidButtonHover}
        >
            {text}
        </Button>
    )
}

export default SolidButton