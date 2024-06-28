import { Text, CardFooter } from '@chakra-ui/react'

import GhostButton from '../button/ghostButton'

interface ProfileCardFooterProps {
    totalFollower: number
    totalFollowing: number
}

function ProfileCardFooter({ totalFollower, totalFollowing }: ProfileCardFooterProps) {
    return (
        <CardFooter display={'flex'} gap={'15px'} padding={0}>
            <GhostButton>
                <Text color={'circle.font'}>{totalFollowing}</Text>
                <Text color={'circle.dark'} ml={'4px'}>
                    Following
                </Text>
            </GhostButton>
            <GhostButton>
                <Text color={'circle.font'}>{totalFollower}</Text>
                <Text color={'circle.dark'} ml={'4px'}>
                    Followers
                </Text>
            </GhostButton>
        </CardFooter>
    )
}

export default ProfileCardFooter