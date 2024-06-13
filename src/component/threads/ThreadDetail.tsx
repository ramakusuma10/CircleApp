import { DetailThreadType, ThreadDataType, UserType } from '../../types/types'
import { Box} from '@chakra-ui/react'

import ThreadList from '../threads/ThreadsList'
import ThreadItem from '../threads/ThreadsItem'
import NewThread from '../threads/Newthreads'
import api from '../../libs/api'
import { useState,useEffect } from 'react'

interface ThreadDetailProps {
    Reply: (data: ThreadDataType) => void
    noImage?: boolean
    thread: DetailThreadType
}

function ThreadDetail({ thread,noImage,Reply }: ThreadDetailProps) {
    const { replies, ...rest } = thread
    const [users, setUsers] = useState<UserType[]>([])

    const repliesUser = replies.map((reply) => {
        return {
            ...reply,
            user: users.find((user) => user.id === reply.userId),
        }
    })

    useEffect(() => {
        async function getUsers() {
            const users: UserType[] = await api.GET_ALL_USERS()
            setUsers(users)
        }

        getUsers()
    }, [])


    if (!replies.length)
        return (
            <Box>
                <ThreadItem thread={rest} noImage={noImage && noImage} noHover/>
                <NewThread placeholder={'Post your reply'} onPost={Reply}
                    imagePreviewId={'atDetail'}
                    buttonText={'Reply'} />
            </Box>
        )

    return (
        <Box>
            <ThreadItem thread={rest} noImage={noImage && noImage} noHover />
            <NewThread placeholder={'Post your reply'} onPost={Reply} imagePreviewId={'atDetail'}buttonText={'Reply'}/>
            <ThreadList threads={repliesUser} />
        </Box>
    )

}

export default ThreadDetail
