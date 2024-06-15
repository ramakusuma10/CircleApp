import { Link, Params, useParams } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Grid, GridItem } from '@chakra-ui/react'


import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import ProfileCard from '../component/cards/ProfileCard'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'
import ThreadDetail from '../component/threads/ThreadDetail'
import { useReply } from '../hooks/useReply'

function DetailPage() {
    const { id }: Readonly<Params<string>> = useParams()
    const targetId: number = id ? +id : NaN

    const [thread, onReply] = useReply(targetId)

    if(thread){

        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <Link to={'/'}>
                            <MenuHeading icon={<BiLeftArrowAlt />} text={'Thread'} />
                        </Link>
                        <ThreadDetail thread={thread} Reply={onReply} />
                    </MainBar>
                </GridItem>
                <GridItem colSpan={7}>
                    <SideBar>
                        <ProfileCard/>
                        <SuggestionCard />
                        <DeveloperCard />
                    </SideBar>
                </GridItem>
            </Grid>
        )
    }
}

export default DetailPage
