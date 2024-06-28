import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { ThreadType } from '../../types/types'

import ThreadItem from '../threads/ThreadsItem'

interface ThreadListProps {
    threads: ThreadType[]
    noURL?: boolean
}
function ThreadList({ threads, noURL }: ThreadListProps) {
    if (threads.length){
        return (
            <Box>
                {threads.map((thread) => {
                    if (noURL) {
                        return <ThreadItem thread={thread} key={thread.id} isReply />
                    }

                    return (
                        <Link to={`/detail/${thread.id}`} key={thread.id}>
                            <ThreadItem thread={thread} />
                        </Link>
                    )
                })}
            </Box>
        )
    }
}

export default ThreadList
