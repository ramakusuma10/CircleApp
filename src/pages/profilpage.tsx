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


function ProfilePage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <MenuHeading icon={<BiLeftArrowAlt />} text={'Gianni Infantino'} />
                    </Link>
                    <Card bg={'circle.backdrop'} px={'10px'} color={'circle.font'} mb={'12px'}>
                    <ProfileCardHeader buttonText={'Edit Profile'} />
                        <ProfileCardBody py={'1rem'} />
                        <ProfileCardFooter />
                    </Card>
                    <Tabs
                        leftTitle={'Threads'}
                        leftContent={<ThreadList />}
                        rightTitle={'Media'}
                        rightContent={<SetMedia />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <SuggestionCard top />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default ProfilePage