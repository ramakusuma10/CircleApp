import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../../component/button/ghostButton'

interface MenuHeadingProps {
    icon?: ReactNode
    text: string
    disabled?: boolean
}

function MenuHeading({ icon, text, disabled }: MenuHeadingProps) {
    if (disabled) {
        return (
            <Box px={'15px'} pt={'30px'} pb={'15px'}>
                <Heading fontSize={fontSizing.bigger}>{text}</Heading>
            </Box>
        )
    }

    return (
        <Box px={'15px'} pt={'30px'} pb={'15px'}>
            <GhostButton color="circle.font" fontSize={'30px'}>
                {icon}
                <Heading fontSize={fontSizing.bigger}>{text}</Heading>
            </GhostButton>
        </Box>
    )
}

export default MenuHeading