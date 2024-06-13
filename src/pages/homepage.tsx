import { Grid, GridItem } from '@chakra-ui/react'

import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import NewThread from '../component/threads/Newthreads'
import ThreadList from '../component/threads/ThreadsList'
import ProfileCard from '../component/cards/ProfileCard'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ThreadDataType, ThreadType } from '../types/types'
import API from '../libs/api'
import postThreads  from '../features/Thread'
import { useState } from 'react'

function HomePage() {
    const [isSafeToReset] = useState<boolean>(true)
    const queryClient: QueryClient = useQueryClient()

    const {data : threads } = useQuery<ThreadType[]>({
        queryKey: ['threads']
        queryFn: API.getThread
    })


    const Mutation = useMutation({
        MutationFn: postThreads,
        OnSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['threads'] })
        }
    })

    async function Post(data: ThreadDataType) : Promise<void> {
        const formData = new FormData()

        formData.append('Content', data.content)
        formData.append('image', data.image[0])

        Mutation.mutate(formData)
    }

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <MenuHeading text={'Home'} />
                    <NewThread 
                    placeholder={"What's on your mind?"}
                    imagePreviewId={'atHome'}
                    isSafeToReset={isSafeToReset}
                    onPost={Post} />
                    
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

export default HomePage