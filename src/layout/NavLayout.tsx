import {Grid, GridItem} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import SideBar from '../component/bar/Sidebar'
import Menu from '../component/navigations/Menu'

function NavLayout() {
    return (
        <Grid templateColumns={'repeat(24, 1fr)'}>
            <GridItem colSpan={5}>
                <SideBar>
                    <Menu/>
                </SideBar>
            </GridItem>
            <GridItem colSpan={19}>
                <Outlet />
            </GridItem>
        </Grid>
    )
}
export default NavLayout