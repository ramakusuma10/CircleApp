import { CardFooter, Flex, Spacer } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail } from 'react-icons/bi'

import ThreadItemButton from '../threads/ThreadsItemButton'
import { UserType } from '../../types/types'
import { useState } from 'react'
import api from '../../libs/api'
import { useNavigate } from 'react-router-dom'

interface ThreadItemFooterProps {
    threadId: number
    totalLike: number
    totalReply: number
    isLiked: boolean
    user: UserType
    isReply?: boolean
    repliesThread?: boolean
}

function ThreadItemFooter({ threadId, totalLike, totalReply, isLiked }: ThreadItemFooterProps) {
    const [isThreadLiked, setThreadLiked] = useState<boolean>(isLiked)
    const [totalThreadLike, setTotalThreadLike] = useState<number>(totalLike)

    const navigate = useNavigate()
    
    async function onLike() {
        try {
            await api.like(threadId)

            setThreadLiked((oldState) => !oldState)
            setTotalThreadLike((oldState) => {
                if (!isThreadLiked) {
                    return oldState + 1
                }

                return oldState - 1
            })
        } catch (error) {
            setThreadLiked(isLiked)
            setTotalThreadLike(totalLike)
        }
    }
    return (
        <CardFooter padding={0}>
            {totalReply !== undefined && totalLike !== undefined && (
                <Flex gap={'15px'}>
                    <ThreadItemButton
                        onClick={onLike}
                        icon={<BiSolidHeart />}
                        value={totalThreadLike}
                        color={isThreadLiked ? 'circle.red' : 'circle.dark'}
                        hoverColor={isThreadLiked ? 'circle.dark' : 'circle.red'}
                    />
                    <ThreadItemButton
                        icon={<BiCommentDetail />}
                        value={totalReply}
                        color={'circle.dark'}
                        hoverColor={'circle.green'}
                        onClick={() => navigate(`/thread/${threadId}`)}
                    />
                </Flex>
            )}
            <Spacer />
        </CardFooter>
    )
}

export default ThreadItemFooter
