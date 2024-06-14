import { Button } from '@chakra-ui/react'
import { fontSizing, hollowButtonHover } from '../../styles/style'
import { ReactNode } from 'react'

interface HollowButtonProps {
    text?: string
    dark?: boolean
    onClick?: () => void
    children?: ReactNode
}

function HollowButton({ text,dark,onClick,children }: HollowButtonProps) {
    return (
        <Button
            variant={'outline'}
            borderRadius={'2xl'}
            border={'2px'}
            px={'15px'}
            fontSize={fontSizing.small}
            borderColor={dark ? 'circle.dark' : 'circle.font'}
            color={dark ? 'circle.dark' : 'color.font'}
            _hover={hollowButtonHover}
            minWidth={'115px'}
            onClick={onClick}
        >
            {text}
            {children}
        </Button>
    )
}

export default HollowButton