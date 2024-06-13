import { Link } from 'react-router-dom'
import { Flex, Grid, GridItem, Text, Avatar, Input } from '@chakra-ui/react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { fontSizing } from '../styles/style'

import MainBar from '../component/bar/Mainbar'
import SideBar from '../component/bar/Sidebar'
import ProfileCard from '../component/cards/ProfileCard'
import SuggestionCard from '../component/cards/SuggestionCard'
import DeveloperCard from '../component/cards/DeveloperCard'
import MenuHeading from '../component/navigations/Menuheading'

import HollowButton from '../component/button/hollowButton'

import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { UserSearch } from '../features/search/types/search'
import { api }  from '../features/libs/api'

function SearchPage() {
    const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearchInput] = useDebounce(searchInput, 400);
  const [searchData, setSearchData] = useState<UserSearch[]>([]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  async function getData() {
    const response = await api.get(`/users?search=${debouncedSearchInput}`);
    setSearchData(response.data);
  }

  useEffect(() => {
    getData();
  }, [debouncedSearchInput]);

    return (
        <Grid templateColumns={'repeat(19, 1fr)'}>
            <GridItem colSpan={12}>
                <MainBar>
                    <Link to={'/'}>
                        <MenuHeading icon={<BiLeftArrowAlt />} text={'Search'} />
                    </Link>
                    <Input onChange={handleChange}/>
                    {searchData.map((user) =>(
                    <Flex direction={'column'} gap={'15px'} px={'15px'} mt={'15px'}>
                        <Flex gap={'15px'} alignItems={'center'}>
                            <Avatar src={user.avatar} />
                            <Flex direction={'column'} justifyContent={'center'} gap={0} mr={'auto'}>
                                <Text fontSize={fontSizing.small} fontWeight={'700'}>
                                    {user.fullname}
                                </Text>
                                <Text fontSize={fontSizing.smaller} color={'circle.dark'}>
                                    {user.username}
                                </Text>
                                <Text fontSize={fontSizing.smaller}>
                                    {user.bio}
                                </Text>
                            </Flex>
                            <HollowButton text={'Follow'} />
                        </Flex>
                    </Flex>
                    ))}
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

export default SearchPage
