import { Flex, Text, Avatar } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import HollowButton from '../button/hollowButton'

interface AccountCardProps {
    Bio?: boolean
    followed?: boolean
}

function AccountCard({Bio, followed}: AccountCardProps) {
    return (
        <Flex gap={'15px'} alignItems={'center'}>
            <Avatar src={'https://api.dicebear.com/8.x/adventurer/svg?seed=Buddy&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'} />
            <Flex direction={'column'} justifyContent={'center'} gap={0} mr={'auto'}>
                <Text fontSize={fontSizing.small} fontWeight={'700'}>
                    Rama Kusuma
                </Text>
                <Text fontSize={fontSizing.smaller} color={'circle.dark'}>
                    @ramakusuma
                </Text>
                {Bio && (
                    <Text fontSize={fontSizing.smaller}>Valar Morghulis - Valar Dohaeris</Text>
                )}
            </Flex>
            {followed ? <HollowButton text={'Following'} dark /> : <HollowButton text={'Follow'} />}
        </Flex>
    )
}

export default AccountCard
