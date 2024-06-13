import { Flex } from '@chakra-ui/react'

import AccountCard from '../cards/AccountCard'

function AccountListCard() {
    return (
        <Flex direction={'column'} gap={'15px'} padding={'15px'}>
            <AccountCard Bio />
            <AccountCard Bio followed />
            <AccountCard Bio followed />
            <AccountCard Bio />
            <AccountCard Bio />
            <AccountCard Bio followed />
        </Flex>
    )
}

export default AccountListCard