import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SideBarProps {
    children: ReactNode
}

function SideBar({ children }: SideBarProps): JSX.Element {
    return <Box as="aside">{children}</Box>
}

export default SideBar