import { Text, CardBody } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

interface ProfileCardBodyProps {
    py?: string
}

function ProfileCardBody({py = '5px'}:ProfileCardBodyProps){
    return(
        <CardBody padding={0} py={py}>
        <Text fontSize={fontSizing.big} fontWeight={'700'}>
        Gianni Infantino 
        </Text>
        <Text color={'circle.dark'} fontSize={fontSizing.small} mb={'8px'}>
        @fifapresiden
        </Text>
        <Text fontSize={fontSizing.small}>
        I go my way. We have embraced reforms. We have embraced transparency. We have embraced good governance. We have turned a page.
        </Text>
    </CardBody>
    )
}

export default ProfileCardBody