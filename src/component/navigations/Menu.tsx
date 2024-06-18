import { Box, Flex, Spacer, Image, useDisclosure } from '@chakra-ui/react'
import { BiSolidHome, BiSearchAlt, BiHeart, BiUser, BiLogOut } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { unsetLoggedUser } from '../../redux/auth/authSlice'
import API from '../../libs/api'

import MenuItem from './MenuItem'
import SolidButton from '../button/solidButton'
import BrandModal from '../assets/BrandModal'
import NewThread from '../threads/Newthreads'
import { useThread } from '../../hooks/useThread'


function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [, onPost] = useThread({ onClose })


    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function onLogout() {

            API.SET_TOKEN('')
            dispatch(unsetLoggedUser())

            navigate('/login')
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
            <Link to={'/profile'}>
                <MenuItem icon={<BiUser />} text={'Profile'} />
            </Link>
            <SolidButton onClick={onOpen} text={'Create Post'} py={'22px'} />
            <Spacer />

            <MenuItem icon={<BiLogOut />} text={'Logout'} onLogout={onLogout} />
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <Box pt={'8px'}>
                    <NewThread
                        placeholder={"What's on your mind?"}
                        imagePreviewId={'atModal'}
                        onPost={onPost}
                    />
                </Box>
            </BrandModal>
        </Flex>
    )
}
export default Menu
