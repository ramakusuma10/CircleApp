import { Link } from 'react-router-dom'
import { Flex, Grid, GridItem, Text} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiSearchAlt } from 'react-icons/bi'

import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import ProfileCard from '../component/cards/ProfileCard'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'
import AccountCard from '../component/cards/AccountCard'

import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import api from '../libs/api'
import { UserType } from '../types/types'
import IconInput from '../component/input/IconInput'
import { useForm } from 'react-hook-form'

function SearchPage() {
    const { register, watch} = useForm()
    const [searchInput, setSearchInput] = useState<string>('')
    const [searchData, setSearchData] = useState<UserType[]>([])

    const debounced = useDebouncedCallback(async (searchInput) => {
            try {
                const searchData = await api.GetUsers(searchInput)
                setSearchData(searchData)
            } catch (error) {
                throw new Error()
            }
    }, 500)
        
    watch((data) => {
        setSearchData([])
        setSearchInput(data.search)
    
        debounced(data.search)
    })
    
    if(!searchInput){
        return (
            <Grid templateColumns={'repeat(19, 1fr)'}>
                <GridItem colSpan={12}>
                    <MainBar>
                        <Link to={'/'}>
                            <MenuHeading icon={<BiLeftArrowAlt />} text={'Search'} gummy />
                        </Link>
                        <IconInput
                            type={'text'}
                            placeholder={'search'}
                            icon={<BiSearchAlt />}
                            name={'search'}
                            register={register}
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

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <MenuHeading icon={<BiLeftArrowAlt />} text={'Search'} gummy />
                    </Link>
                    <IconInput
                        type={'text'}
                        placeholder={'search'}
                        icon={<BiSearchAlt />}
                        name={'search'}
                        register={register}
                    />
                    <Flex direction={'column'} gap={'1rem'} px={'1rem'} mt={'1rem'}>
                        {searchData.length ? (
                            searchData.map((Data) => (
                                <AccountCard
                                    key={Data.id}
                                    id={Data.id}
                                    fullname={Data.fullname}
                                    username={Data.username}
                                    avatar={Data.avatar}
                                    bio={Data.bio}
                                    followed={Data.isFollowed}
                                />
                                ))
                            ):(
                                <Text>
                                    Tidak Ada Data
                                </Text>
                            )}
                            
                    </Flex>
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

export default SearchPage
