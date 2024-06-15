import { Grid, GridItem } from '@chakra-ui/react'

import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import NewThread from '../component/threads/Newthreads'
import ProfileCard from '../component/cards/ProfileCard'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'
import { useThread } from '../hooks/useThread'

function HomePage() {
    const [threads, onPost] = useThread()
    
    if (threads){
        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <MenuHeading text={'Home'} />
                        <NewThread 
                        placeholder={"What's on your mind?"}
                        imagePreviewId={'atHome'}
                        onPost={onPost} />
                        
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

export default HomePage