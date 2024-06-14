import { CardBody, Text, Image } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../button/ghostButton'
import { useSearchParams } from 'react-router-dom'

interface ThreadItemBodyProps {
    threadContent: string
    threadId: number
    threadImage: string | null
    noImage?: boolean
    onOpen: () => void
}

function ThreadItemBody({ threadContent, threadId, threadImage, noImage, onOpen }: ThreadItemBodyProps) {
    const [, setSearchParams] = useSearchParams()

    function onPhotoClick(): void {
        setSearchParams({ threadId: String(threadId) })

        onOpen()
    }

    return (
        <CardBody padding={0}>
            <Text fontSize={fontSizing.small}>{threadContent}
            </Text>
            {!noImage && threadImage && (
                <GhostButton onClick={onPhotoClick}>
                    <Image
                        src={threadImage}
                        objectFit={'cover'}
                        maxWidth={'100%'}
                        width={'auto'}
                        height={'auto'}
                        borderRadius={'lg'}
                    />
                </GhostButton>
            )}
        </CardBody>
    )
}

export default ThreadItemBody
