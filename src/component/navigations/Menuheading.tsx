import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../../component/button/ghostButton'

interface MenuHeadingProps {
    icon?: ReactNode
    text: string
    disabled?: boolean
    gummy?:boolean
}

function MenuHeading({ icon, text, disabled, gummy }: MenuHeadingProps) {
    if (disabled) {
        return (
            <Box px={'15px'} pt={'30px'} pb={'15px'}>
                <Heading fontSize={fontSizing.bigger}>{text}</Heading>
            </Box>
        )
    }

    if (gummy) {
        return (
            <Box
                pt={'2rem'}
                pb={'1rem'}
                px={'1rem'}
                pos={'sticky'}
                top={0}
                left={0}
                zIndex={'2'}
                bg={'circle.backdrop'}
                width={'100%'}
            >
                <GhostButton color="circle.font" fontSize={'2rem'}>
                    {icon}
                    <Heading fontSize={fontSizing.bigger}>{text}</Heading>
                </GhostButton>
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