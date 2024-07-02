import { Flex } from '@chakra-ui/react'
import { UserType } from '../../types/types'
import AccountCard from '../cards/AccountCard'
interface AccountListCardProps {
    users: UserType[]
}
function AccountListCard({users}: AccountListCardProps) {
    if(users.length){
        return (
            <Flex direction={'column'} gap={'15px'} padding={'15px'}>
                {users.map((user)=>(
                    <AccountCard 
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        fullname={user.fullname}
                        bio={user.bio}
                        avatar={user.avatar}
                        isFollowed={user.isFollowed}
                    />
                ))}
            </Flex>
            )

    }
}

export default AccountListCard