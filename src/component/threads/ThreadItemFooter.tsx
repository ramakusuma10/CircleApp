import { CardFooter, Flex, Spacer } from '@chakra-ui/react'
import { BiSolidHeart, BiCommentDetail, BiDotsVerticalRounded } from 'react-icons/bi'

import ThreadItemButton from '../threads/ThreadsItemButton'
import { UserType } from '../../types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'

interface ThreadItemFooterProps {
    ThreadId: number
    totalLike: number
    totalReply: number
    isLiked: boolean
    user: UserType
}

function ThreadItemFooter({ ThreadId, totalLike, totalReply, isLiked, user }: ThreadItemFooterProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)
    const [isThreadLiked, setThreadLiked] = useState<boolean>(isLiked)
    const [totalThreadLike, setTotalThreadLike] = useState<number>(totalLike)

    
    async function onLike() {
        try {
            await API.TOGGLE_LIKE(ThreadId)

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
                    />
                </Flex>
            )}
            <Spacer />
            {loggedUser && loggedUser.id === user.id && (
                <ThreadItemButton
                    icon={<BiDotsVerticalRounded />}
                    color={'circle.dark'}
                    hoverColor={'circle.green'}                />
            )}
        </CardFooter>
    )
}

export default ThreadItemFooter
