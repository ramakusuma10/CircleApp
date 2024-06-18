import { Link } from 'react-router-dom'
import { Grid, GridItem, Card } from '@chakra-ui/react'
import { BiLeftArrowAlt } from 'react-icons/bi'


import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import ProfileCardHeader from '../component/cards/ProfileCardHeader'
import ProfileCardBody from '../component/cards/ProfileCardBody'
import ProfileCardFooter from '../component/cards/ProfileCardFooter'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'
import ThreadList from '../component/threads/ThreadsList'
import Tabs from '../component/utils/Tabs'
import SetMedia from '../component/utils/setMedia'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


function ProfilePage() {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    if (loggedUser) {
        const { username, fullname, bio, avatar, totalFollower, totalFollowing, threads } = loggedUser

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <MenuHeading icon={<BiLeftArrowAlt />} text={fullname} gummy />
                    </Link>
                    <Card bg={'circle.backdrop'} px={'15px'} color={'circle.font'} mb={'23px'}>
                    <ProfileCardHeader buttonText={'Edit Profile'}  avatar={avatar}/>
                        <ProfileCardBody username={username} fullname={fullname} bio={bio} py={'15px'} />
                        <ProfileCardFooter 
                            totalFollower={totalFollower}
                            totalFollowing={totalFollowing}
                        />
                    </Card>
                    <Tabs
                        leftTitle={'Threads'}
                        leftContent={<ThreadList threads={threads} />}
                        rightTitle={'Media'}
                        rightContent={<SetMedia />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <SuggestionCard  />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}
}
export default ProfilePage