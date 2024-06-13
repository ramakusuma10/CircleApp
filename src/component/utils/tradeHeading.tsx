import { fontSizing } from '../../styles/style'
import { Heading } from '@chakra-ui/react'

interface TradeHeadingProps {
    text: string
}

function TradeHeading({ text }: TradeHeadingProps) {
    return (
        <Heading fontWeight={'700'} fontSize={fontSizing.big} mb={'15px'}>
            {text}
        </Heading>
    )
}

export default TradeHeading