import { Card, Flex, Box, Divider, Avatar, useDisclosure } from '@chakra-ui/react'
import { ThreadType} from '../../types/types'
import { ThreadHover } from '../../styles/style'

import ThreadItemHeader from '../threads/ThreadItemHeader'
import ThreadItemBody from '../threads/ThreadItemBody'
import ThreadItemFooter from '../threads/ThreadItemFooter'
import ImageModal from '../assets/ImageModal'
import { useNavigate } from 'react-router-dom'
import GhostButton from '../button/ghostButton'

interface ThreadItemProps  {
   thread:ThreadType
   noImage?: boolean
   repliesThread?: boolean
   isReply?: boolean
}

function ThreadItem({thread,noImage,repliesThread, isReply}: ThreadItemProps) {
    const { id, content, image, createdAt, totallikes, totalreplies, isLiked, user} = thread
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    function onAvatarClick() {
        if (user) {
            navigate(`/user/${user.id}`)
        }
    }

    if (user) {
        return (
            <Box>
                <Card bg={'circle.backdrop'} color={'circle.font'} p={'15px'} _hover={!isReply ? ThreadHover : {}}>
                    <Flex gap={'15px'}>
                        <GhostButton onClick={onAvatarClick} onTop>
                            <Avatar src={user.avatar} />
                        </GhostButton>
                        <Flex direction={'column'} gap={'4px'} width={'100%'}>
                            <ThreadItemHeader
                                threadId={id}
                                userId={user.id}
                                fullname={user.fullname}
                                username={`@${user.username}`}
                                date={createdAt}
                                user={user}
                                isReply={isReply && isReply}
                                repliesThread={repliesThread && repliesThread}
                            />
                            <ThreadItemBody
                                threadId={id}
                                threadContent={content}
                                threadImage={image}
                                noImage={noImage && noImage}
                                onOpen={onOpen}
                            />
                            <ThreadItemFooter
                                threadId={id}
                                totalLike={totallikes}
                                totalReply={totalreplies}
                                isLiked={isLiked}
                                user={user}
                                repliesThread={repliesThread && repliesThread}
                            />
                        </Flex>
                    </Flex>
                </Card>
                <Divider border={'1px'} borderColor={'circle.darker'} />
                {isOpen && <ImageModal isOpen={isOpen} onClose={onClose} ThreadPhoto={image} />}
            </Box>
        )
    }
}

export default ThreadItem
