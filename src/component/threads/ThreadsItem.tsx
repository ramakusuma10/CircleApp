import { Card, Flex, Box, Divider, Avatar, useDisclosure } from '@chakra-ui/react'
import { ThreadType} from '../../types/types'
import { ThreadHover } from '../../styles/style'

import ThreadItemHeader from '../threads/ThreadItemHeader'
import ThreadItemBody from '../threads/ThreadItemBody'
import ThreadItemFooter from '../threads/ThreadItemFooter'
import ImageModal from '../assets/ImageModal'

interface ThreadItemProps  {
   thread:ThreadType
   noImage?: boolean
   noHover?: boolean
}

function ThreadItem({thread,noImage,noHover}: ThreadItemProps) {
    const { id, content, image, createdAt, totallikes, totalreplies, isLiked, user} = thread
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (user) {
        return (
            <Box>
                <Card bg={'circle.backdrop'} color={'circle.font'} p={'15px'} _hover={!noHover ?ThreadHover : {}}>
                    <Flex gap={'15px'}>
                        <Avatar src={user.avatar} />
                        <Flex direction={'column'} gap={'4px'} width={'100%'}>
                            <ThreadItemHeader
                                name={user.name}
                                username={`@${user.username}`}
                                date={createdAt}
                            />
                            <ThreadItemBody
                                ThreadId={id}
                                ThreadContent={content}
                                ThreadImage={image}
                                noImage={noImage && noImage}
                                onOpen={onOpen}
                            />
                            <ThreadItemFooter
                                ThreadId={id}
                                totalLike={totallikes}
                                totalReply={totalreplies}
                                isLiked={isLiked}
                                user={user}
                            />
                        </Flex>
                    </Flex>
                </Card>
                <Divider border={'1px'} borderColor={'circle.darker'} />
                <ImageModal isOpen={isOpen} onClose={onClose} ThreadPhoto={image} />
            </Box>
        )
    }
}

export default ThreadItem
