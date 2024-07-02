import { Link, useNavigate, useParams, Params } from 'react-router-dom'
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
import { useEffect, useState } from 'react'
import api from '../libs/api'
import { UserType } from '../types/types'


function ProfilePage() {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    const { id }: Readonly<Params<string>> = useParams()
    const userId = id ? +id : NaN

    const [user, setUser] = useState<UserType | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        async function GetUser() {
            const user: UserType = await api.GET_USER(userId)

            if (loggedUser) {
                if (loggedUser.id === user.id) {
                    navigate('/user')
                }
            }

            setUser(user)
        }

        setUser(null)
        GetUser()
    }, [loggedUser, userId, navigate])

    if (user) {
        const { username, fullname, bio, avatar, totalFollower, totalFollowed, isFollowed,threads } = user

        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <Link to={'/'}>
                            <MenuHeading icon={<BiLeftArrowAlt />} text={fullname} gummy />
                        </Link>
                        <Card bg={'circle.backdrop'} px={'15px'} color={'circle.font'} mb={'23px'}>
                            <ProfileCardHeader buttonText={isFollowed ? 'Following' : 'Follow'}  avatar={avatar} isUserProfile={true}/>
                            <ProfileCardBody username={username} fullname={fullname} bio={bio} py={'15px'} />
                            <ProfileCardFooter 
                                totalFollower={totalFollower}
                                totalFollowed={totalFollowed}
                            />
                        </Card>
                        <Tabs
                            leftTitle={'Threads'}
                            leftContent={<ThreadList threads={threads} />}
                            rightTitle={'Media'}
                            rightContent={<SetMedia threads={threads} />}
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