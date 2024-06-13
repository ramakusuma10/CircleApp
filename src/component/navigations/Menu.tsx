import { Flex, Spacer, Image } from '@chakra-ui/react'
import { BiSolidHome, BiSearchAlt, BiHeart, BiUser, BiLogOut } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hooks'
import { unsetLoggedUser } from '../../redux/auth/authSlice'
import API from '../../libs/api'

import MenuItem from './MenuItem'
import SolidButton from '../button/solidButton'

interface MenuProps {
    onOpen: () => void
}

function Menu({onOpen}: MenuProps) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    async function onLogout() {
        try {
            API.SET_TOKEN('')
            dispatch(unsetLoggedUser())

            navigate('/login')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Flex
            as={'nav'}
            direction={'column'}
            py={'30px'}
            pr={'30px'}
            gap={'30px'}
            height={'100vh'}
            pos={'fixed'}
            w={'266px'}
        >
             <Image src={'/circle.png'} objectFit={'cover'} width={'60%'} mb={'15px'} />
            <Link to={'/'}>
                <MenuItem icon={<BiSolidHome />} text={'Home'} />
            </Link>
            <Link to={'/search'}>
                <MenuItem icon={<BiSearchAlt />} text={'Search'} />
            </Link>
            <Link to={'/follows'}>
                <MenuItem icon={<BiHeart />} text={'Follows'} />
            </Link>
            <Link to={'/me'}>
                <MenuItem icon={<BiUser />} text={'Profile'} />
            </Link>
            <SolidButton onClick={onOpen} text={'Create Post'} py={'22px'} />
            <Spacer />
            <Link to={'/login'}>
                <MenuItem icon={<BiLogOut />} text={'Logout'} onLogout={onLogout}/>
            </Link>
        </Flex>
    )
}
export default Menu
