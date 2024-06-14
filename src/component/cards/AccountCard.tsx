import { Flex, Text, Avatar } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import HollowButton from '../button/hollowButton'
import { UserType } from '../../types/types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../libs/api'
import { setLoggedUser } from '../../redux/auth/authSlice'


interface AccountCardProps {
    id: number
    username: string
    fullname: string
    bio: string | null
    avatar: string
    NoBio?: boolean
    followed: boolean
}

function AccountCard({id, username, fullname, bio, avatar, NoBio, followed}: AccountCardProps) {
    const [isUserFollowed, setUserFollowed] = useState<boolean>(followed)
    
    const dispatch = useDispatch()
    
    async function dispatchLatestUserData() {
        const loggedUser: UserType = await api.GetLoggedUser  ()
        dispatch(setLoggedUser(loggedUser))
    }

    async function Follow() {
        try {
            if (!followed) {
                await api.follow(id)
                return setUserFollowed(true)
            }

            await api.unfollow(id)
            return setUserFollowed(false)
        } catch (error) {
            setUserFollowed(followed)
        } finally {
            dispatchLatestUserData()
        }
    }

    return (
        <Flex gap={'15px'} alignItems={'center'}>
            <Avatar src={avatar} />
            <Flex direction={'column'} justifyContent={'center'} gap={0} mr={'auto'}>
                <Text fontSize={fontSizing.small} fontWeight={'700'}>
                    {fullname}
                </Text>
                <Text fontSize={fontSizing.smaller} color={'circle.dark'}>
                    {username}
                </Text>
                {bio && !NoBio && <Text fontSize={fontSizing.smaller}>{bio}</Text>}
            </Flex>

            {isUserFollowed ? (
                <HollowButton text={'Unfollow'} onClick={Follow} dark />
            ) : (
                <HollowButton text={'Follow'} onClick={Follow} />
            )}
        </Flex>
    )
}

export default AccountCard
