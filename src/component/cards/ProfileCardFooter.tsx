import { Text, CardFooter } from '@chakra-ui/react'

import GhostButton from '../button/ghostButton'

function ProfileCardFooter() {
    return (
        <CardFooter display={'flex'} gap={'15px'} padding={0}>
            <GhostButton>
                <Text color={'circle.font'}>345</Text>
                <Text color={'circle.dark'} ml={'2.5px'}>
                    Following
                </Text>
            </GhostButton>
            <GhostButton>
                <Text color={'circle.font'}>2.5 M</Text>
                <Text color={'circle.dark'} ml={'2.5px'}>
                    Followers
                </Text>
            </GhostButton>
        </CardFooter>
    )
}

export default ProfileCardFooter