import { Flex, Text, Image } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { fontSizing } from '../../styles/style'

import BrandCard from './BrandCard'
import GhostButton from '../button/ghostButton'

function DeveloperCard() {
    return (
        <BrandCard>
            <Flex color={'circle.dark'} alignItems={'center'} gap={'4px'} mb={'4px'}>
                <Text color={'circle.font'} fontSize={fontSizing.small}>
                    Developed by @rama
                </Text>
                <Text color={'circle.dark'} fontSize={fontSizing.small}>
                    •
                </Text>
                <GhostButton color="circle.dark">
                    <BiLogoGithub fontSize={fontSizing.big} />
                </GhostButton>
                <GhostButton color="circle.dark">
                    <BiLogoLinkedinSquare fontSize={fontSizing.big} />
                </GhostButton>
                <GhostButton color="circle.dark">
                    <BiLogoInstagram fontSize={fontSizing.big} />
                </GhostButton>
                <GhostButton color="circle.dark">
                    <BiLogoTwitter fontSize={fontSizing.big} />
                </GhostButton>
            </Flex>
            <Flex color={'circle.dark'} fontSize={fontSizing.smaller} alignItems={'center'}>
                Powered by
                <Image src={'/dumbways-logo.png'} boxSize={'15px'} display={'inline'} mx="5px" />
                DumbWays Indonesia
            </Flex>
        </BrandCard>
    )
}

export default DeveloperCard
