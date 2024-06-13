import { CardHeader, Text } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'
import { dateFormatter } from '../../utils/dateFormatter'


interface ThreadItemHeaderProps {
    name: string
    username: string
    date: string
}

function ThreadItemHeader({ name, username, date }: ThreadItemHeaderProps) {
    return (
        <CardHeader display={'flex'} gap={'8px'} alignItems={'end'} padding={0}>
            <Text fontSize={fontSizing.small} fontWeight={'700'}>
                {name}
            </Text>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                {username}
            </Text>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                &#8226; {dateFormatter(date)}
            </Text>
        </CardHeader>
    )
}

export default ThreadItemHeader
