import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { transparentHover } from '../../styles/style'

interface GlassButtonProps {
    children: ReactNode
    color?: string
    fontSize?: string
    onTop?: boolean
    onClick?: () => void
}

function GhostButton({ children, color, fontSize, onClick, onTop }: GlassButtonProps) {
    function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        if (onClick) {
            e.stopPropagation()
            e.preventDefault()

            onClick()
        }
    }

    return (
        <Button
            padding={0}
            height={'auto'}
            width={'auto'}
            variant={'ghost'}
            display={'flex'}
            alignItems={onTop ? 'start' : 'center'}
            justifyContent={'start'}
            minWidth={'none'}
            minHeight={'none'}
            color={color ? color : undefined}
            fontSize={fontSize ? fontSize : undefined}
            _hover={transparentHover}
            onClick={(e) => onClickHandler(e)}

        >
            {children}
        </Button>
    )
}

export default GhostButton