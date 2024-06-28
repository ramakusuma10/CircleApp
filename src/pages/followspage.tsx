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
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { UserType } from '../types/types'
import api from '../libs/api'

function FollowsPage() {
    const [followers, setFollowers] = useState<UserType[]>([])
    const [followeds, setFolloweds] = useState<UserType[]>([])

    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    useEffect(() => {
        async function getUsers() {
            const users: UserType[] = await api.FindAllUser()

            if (loggedUser) {
                setFollowers(() => {
                    return users.filter((user) => {
                        return loggedUser.followers.some((follower) => follower.followerId === user.id)
                    })
                })

                setFolloweds(() => {
                    return users.filter((user) => {
                        return loggedUser.followeds.some(
                            (followed) => followed.followedId === user.id
                        )
                    })
                })
            }
        }

        getUsers()
    }, [loggedUser])

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <MenuHeading icon={<BiLeftArrowAlt />} text={'Follows'} gummy />
                    </Link>
                    <Tabs
                        leftTitle={'Followers'}
                        leftContent={<AccountListCard users={followers}/>}
                        rightTitle={'Following'}
                        rightContent={<AccountListCard users={followeds} />}
                    />
                </MainBar>
            </GridItem>
            <GridItem colSpan={7}>
                <SideBar>
                    <ProfileCard />
                    <SuggestionCard />
                    <DeveloperCard />
                </SideBar>
            </GridItem>
        </Grid>
    )
}

export default FollowsPage
