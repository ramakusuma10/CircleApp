import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Grid, GridItem } from '@chakra-ui/react'

import AccountListCard from '../component/cards/AccountListCard'
import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import ProfileCard from '../component/cards/ProfileCard'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'
import Tabs from '../component/utils/Tabs'

function FollowsPage() {
    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <MenuHeading icon={<BiLeftArrowAlt />} text={'Follows'} />
                    </Link>
                    <Tabs
                        leftTitle={'Followers'}
                        leftContent={<AccountListCard />}
                        rightTitle={'Following'}
                        rightContent={<AccountListCard />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <ProfileCard top />
                    <SuggestionCard />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default FollowsPage
