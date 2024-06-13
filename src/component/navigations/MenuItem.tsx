import { Text, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../button/ghostButton'

interface MenuItemProps {
    onLogout?: () => void
    icon: ReactNode
    text: string
}

function MenuItem({ icon, text, onLogout }: MenuItemProps) {
    return (
        <GhostButton onClick={onLogout}>
            <Flex
                gap={'10px'}
                alignItems={'center'}
                fontSize={fontSizing.bigger}
                color={'circle.font'}
            >
                {icon}
                <Text
                    as={'h1'}
                    fontSize={fontSizing.big}
                    fontWeight={'600'}
                    display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}
                    color={'circle.font'}
                >
                    {text}
                </Text>
            </Flex>
        </GhostButton>
    )
}

export default MenuItem
