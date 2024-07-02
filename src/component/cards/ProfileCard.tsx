import { useSelector } from 'react-redux'
import { Collapse, Flex } from '@chakra-ui/react'
import { UserType } from '../../types/types'
import { RootState } from '../../redux/store'
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi'
import { useState } from 'react'

import ProfileCardHeader from './ProfileCardHeader'
import ProfileCardBody from './ProfileCardBody'
import ProfileCardFooter from './ProfileCardFooter'
import BrandCard from './BrandCard'
import GhostButton from '../button/ghostButton'
import TradeHeading from '../utils/tradeHeading'
function ProfileCard() {
    const [hideProfile, setHideProfile] = useState(false)
    const loggedUser: UserType | undefined = useSelector(
        (states: RootState) => states.loggedUser.value
    )

    function onToggle() {
        setHideProfile((oldState) => !oldState)
    }
    if (loggedUser) {
        const { avatar, bio, username, fullname, totalFollower, totalFollowed } = loggedUser
        return (
            <BrandCard>
                <GhostButton onClick={onToggle}>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        color={'circle.font'}
                        w={'100%'}
                    >
                        <TradeHeading text={fullname} mb={0} />
                        {hideProfile ? (
                            <BiSolidChevronUp fill={'#ffffff'} size={'23px'} />
                        ) : (
                            <BiSolidChevronDown fill={'#ffffff'} size={'23px'} />
                        )}
                    </Flex>
                </GhostButton>
                <Collapse in={hideProfile} transition={{ enter: { duration: 0.5 } }}>
                    <ProfileCardHeader buttonText={'Edit Profile'} avatar={avatar} />
                    <ProfileCardBody username={username} fullname={fullname} bio={bio} />
                    <ProfileCardFooter
                        totalFollower={totalFollower}
                        totalFollowed={totalFollowed}
                    />
                </Collapse>
            </BrandCard>
        )
    }
}

export default ProfileCard
