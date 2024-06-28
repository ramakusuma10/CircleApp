import { Text, Button, Box } from '@chakra-ui/react'
import { forwardRef,ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

interface ThreadItemButtonProps {
    onClick?: () => void
    icon: ReactNode
    value?: number
    color: string
    hoverColor: string
    ml?: string
    Left?: boolean
}

    const ThreadItemButton = forwardRef<HTMLButtonElement, ThreadItemButtonProps> ( ({ icon, value, color, hoverColor, onClick, ml, Left},ref) => {
        function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
            e.stopPropagation()
            e.preventDefault()

            if (onClick) onClick()

        }
        return (
            <Button
                variant={'ghost'}
                display={'flex'}
                alignItems={'center'}
                gap={Left ? 0 : '8px'}
                color={color}
                padding={0}
                zIndex={1}
                _hover={{ color: hoverColor, background: 'transparent' }}
                ref={ref}
                ml={ml && ml}
                height={Left ? 0 : 'auto'}
                onClick={(e)=> onClickHandler(e)}
            >
                <Box fontSize={fontSizing.bigger}>{icon}</Box>
                <Text color={'circle.dark'} fontSize={fontSizing.small} fontWeight={'400'}>
                    {value}
                </Text>
            </Button>
        )
    }
)
export default ThreadItemButton
