import { Flex, Text, Avatar } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import HollowButton from '../button/hollowButton'
import { UserType } from '../../types/types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../libs/api'
import { setLoggedUser } from '../../redux/auth/authSlice'
import { Link } from 'react-router-dom'


interface AccountCardProps {
    id: number
    username: string
    fullname: string
    bio: string | null
    avatar: string
    NoBio?: boolean
    isFollowed: boolean
}

function AccountCard({id, username, fullname, bio, avatar, NoBio, isFollowed}: AccountCardProps) {
    const [isUserFollowed, setUserFollowed] = useState<boolean>(isFollowed)
    
    const dispatch = useDispatch()
    
    async function dispatchLatestUserData() {
        const loggedUser: UserType = await api.GetLoggedUser()
        dispatch(setLoggedUser(loggedUser))
    }

    async function Follow() {
        try {
            if (!isFollowed) {
                await api.follow(id)
                return setUserFollowed(true)
            }

            await api.unfollow(id)
            return setUserFollowed(false)
        } catch (error) {
            setUserFollowed(isFollowed)
        } finally {
            dispatchLatestUserData()
        }
    }

    return (
        <Flex gap={'15px'} alignItems={'center'}>
            <Link to={`/user/${id}`}>
                <Avatar src={avatar} _hover={{ opacity: '.8', transition: 'opacity .3s ease' }} />
            </Link>
            <Flex direction={'column'} justifyContent={'center'} gap={0} mr={'auto'}>
            <Link to={`/user/${id}`}>
                    <Text
                        fontSize={fontSizing.small}
                        fontWeight={'700'}
                        _hover={{ opacity: '.8', transition: 'opacity .3s ease' }}
                    >
                        {fullname}
                    </Text>
                    <Text
                        fontSize={fontSizing.smaller}
                        color={'circle.dark'}
                        _hover={{ opacity: '.8', transition: 'opacity .3s ease' }}
                    >
                        @{username}
                    </Text>
                </Link>
                {bio && !NoBio && <Text fontSize={fontSizing.smaller}>{bio}</Text>}
            </Flex>

            {isUserFollowed ? (
                <HollowButton text={'Following'} onClick={Follow} dark />
            ) : (
                <HollowButton text={'Follow'} onClick={Follow} />
            )}
        </Flex>
    )
}

export default AccountCard
