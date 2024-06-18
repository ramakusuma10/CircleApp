import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { ThreadType } from '../../types/types'

import ThreadItem from '../threads/ThreadsItem'

interface ThreadListProps {
    threads: ThreadType[]
}
function ThreadList({ threads }: ThreadListProps) {
    if (threads.length){
        return (
            <Box>
                {threads.map((thread) => {
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
