import { Text, CardBody } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

interface ProfileCardBodyProps {
    username: string
    fullname: string
    bio: string | null
    py?: string
}

function ProfileCardBody({username, fullname, bio, py = '5px'}:ProfileCardBodyProps){
    return(
        <CardBody padding={0} py={py}>
        <Text fontSize={fontSizing.big} fontWeight={'700'}>
            {fullname}
        </Text>
        <Text color={'circle.dark'} fontSize={fontSizing.small} mb={'8px'}>
            @{username}
        </Text>
        <Text fontSize={fontSizing.small}>
            {bio && <Text fontSize={fontSizing.small}>{bio}</Text>}
        </Text>
    </CardBody>
    )
}

export default ProfileCardBody