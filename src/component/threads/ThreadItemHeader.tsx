import { CardHeader, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'
import { dateFormatter } from '../../utils/dateFormatter'
import { UserType } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import { useThread } from '../../hooks/useThread'
import { useReply } from '../../hooks/useReply'
import ThreadItemButton from './ThreadsItemButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import GhostButton from '../button/ghostButton'
import {BiDotsVerticalRounded } from 'react-icons/bi'


interface ThreadItemHeaderProps {
    fullname: string
    username: string
    date: string
    user: UserType
    threadId: number
    isReply?: boolean
    repliesThread?: boolean
    userId: number
}

function ThreadItemHeader({ fullname, username, date, user, threadId, isReply,repliesThread,userId }: ThreadItemHeaderProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    const navigate = useNavigate()
    const [, , onDelete] = useThread()
    const [, , onDeleteReply] = useReply()

    function ProfileClick() {
        navigate(`/user/${userId}`)
    }

    return (
        <CardHeader display={'flex'} gap={'8px'} alignItems={'end'} padding={0}>
            <GhostButton onClick={ProfileClick}>
                <Text
                    fontSize={fontSizing.small}
                    color={'circle.font'}
                    mr={'8px'}
                    fontWeight={'700'}
                >
                    {fullname}
                </Text>
                <Text fontSize={fontSizing.small} color={'circle.dark'}>
                    {username}
                </Text>
            </GhostButton>
            <Text fontSize={fontSizing.small} color={'circle.dark'}>
                &#8226; {dateFormatter(date)}
            </Text>
            <Spacer />
            {loggedUser && loggedUser.id === user.id && (
                <Menu>
                    <MenuButton
                        as={ThreadItemButton}
                        color={'circle.dark'}
                        icon={<BiDotsVerticalRounded fontSize={'23px'} />}
                        hoverColor={'circle.accent'}
                        ml={'8px'}
                        Left
                    ></MenuButton>
                    <MenuList bg={'circle.darker'} border={0}>
                        <MenuItem
                            bg={'circle.darker'}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                if (repliesThread) {
                                    navigate('/')
                                    return onDelete(threadId)
                                }
                                if (isReply) {
                                    return onDeleteReply(threadId)
                                }
                                return onDelete(threadId)
                            }}
                        >
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </CardHeader>
    )
}

export default ThreadItemHeader
