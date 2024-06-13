import { CardBody, Text, Image } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import GhostButton from '../button/ghostButton'
import { useSearchParams } from 'react-router-dom'

interface ThreadItemBodyProps {
    ThreadContent: string
    ThreadId: number
    ThreadImage: string | null
    noImage?: boolean
    onOpen: () => void
}

function ThreadItemBody({ ThreadContent, ThreadId, ThreadImage, noImage, onOpen }: ThreadItemBodyProps) {
    const [, setSearchParams] = useSearchParams()

    function onPhotoClick(): void {
        setSearchParams({ ThreadId: String(ThreadId) })

        onOpen()
    }

    return (
        <CardBody padding={0}>
            <Text fontSize={fontSizing.small}>{ThreadContent}
            </Text>
            {!noImage && ThreadImage && (
                <GhostButton onClick={onPhotoClick}>
                    <Image
                        src={ThreadImage}
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
