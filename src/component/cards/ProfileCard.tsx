
import ProfileCardHeader from './ProfileCardHeader'
import ProfileCardBody from './ProfileCardBody'
import ProfileCardFooter from './ProfileCardFooter'
import BrandCard from './BrandCard'
import TradeHeading from '../utils/tradeHeading'


interface ProfileCardProps {
    top?: boolean
}

function ProfileCard({ top }: ProfileCardProps) {
    return (
        <BrandCard top={top && top}>
            <TradeHeading text={'My Profile'} />
            <ProfileCardHeader buttonText ='Edit Profile'/>
            <ProfileCardBody/>
            <ProfileCardFooter/>
        </BrandCard>
    )
}

export default ProfileCard
