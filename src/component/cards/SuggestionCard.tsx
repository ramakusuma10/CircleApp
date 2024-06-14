import { Flex } from '@chakra-ui/react'

import AccountCard from './AccountCard'
import TradeHeading from '../utils/tradeHeading'
import BrandCard from './BrandCard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserType } from '../../types/types'
import { RootState } from '../../redux/store'
import api from '../../libs/api'


function SuggestionCard() {
    const [users, setUsers] = useState<UserType[]>([])
    const loggedUser: UserType | undefined = useSelector(
        (states: RootState) => states.loggedUser.value
    )

    useEffect(() => {
        async function getUsers() {
            const rawUsers: UserType[] = await api.FindAllUser()

            if (loggedUser) {
                const users = rawUsers.filter((user) => {
                    return !user.isFollowed && user.id !== loggedUser.id
                })

                const randomUsers = users.sort(() => Math.random() - 0.5).splice(0, 5)
                setUsers(randomUsers)
            }
        }

        getUsers()
    }, [loggedUser])

    if (users.length) {
        return (
            <BrandCard>
                <TradeHeading text={'Suggested accounts'} />
                <Flex direction={'column'} gap={'1rem'}>
                    {users.map((user) => (
                        <AccountCard
                            key={user.id}
                            id={user.id}
                            username={user.username}
                            fullname={user.fullname}
                            bio={user.bio}
                            avatar={user.avatar}
                            followed={user.isFollowed}
                            NoBio
                        />
                    ))}
                </Flex>
            </BrandCard>
        )
    }
}

export default SuggestionCard
