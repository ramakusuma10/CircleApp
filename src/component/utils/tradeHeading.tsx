import { fontSizing } from '../../styles/style'
import { Heading } from '@chakra-ui/react'

interface TradeHeadingProps {
    text: string
    mb?: string | number
}

function TradeHeading({ text, mb = '15px'}: TradeHeadingProps) {
    return (
        <Heading fontWeight={'700'} fontSize={fontSizing.big} mb={mb}>
            {text}
        </Heading>
    )
}

export default TradeHeading