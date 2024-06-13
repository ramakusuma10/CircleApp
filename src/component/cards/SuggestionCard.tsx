import { Text, Flex } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'

import AccountCard from './AccountCard'
import BrandCard from './BrandCard'

interface SuggestionCardProps{
    top? : boolean
}
function SuggestionCard({top }: SuggestionCardProps) {
    return (
        <BrandCard top = {top && top}>
            <Text fontWeight={'700'} fontSize={fontSizing.big} mb={'10px'}>
                Suggested accounts
            </Text>
            <Flex direction={'column'} gap={'10px'}>
                <AccountCard/>
                <AccountCard/>
                <AccountCard followed/>
            </Flex>
        </BrandCard>
    )
}

export default SuggestionCard
