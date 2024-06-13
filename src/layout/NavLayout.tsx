import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import BrandModal from '../component/assets/BrandModal'
import NewThread from '../component/threads/Newthreads'
import SideBar from '../component/bar/Sidebar'
import Menu from '../component/navigations/Menu'

function NavLayout() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Grid templateColumns={'repeat(24, 1fr)'}>
            <GridItem colSpan={5}>
                <SideBar>
                    <Menu onOpen={onOpen} />
                </SideBar>
            </GridItem>
            <GridItem colSpan={19}>
                <Outlet />
            </GridItem>
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <Box pt={'8px'}>
                    <NewThread placeholder={"What's on your mind?"} />
                </Box>
            </BrandModal>
        </Grid>
    )
}
export default NavLayout