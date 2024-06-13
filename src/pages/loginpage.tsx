import { fontSizing } from '../styles/style'
import { Link as RLink, useNavigate} from 'react-router-dom'
import { Container, Flex, Text, Image, Link, useToast } from '@chakra-ui/react'
import { useAppDispatch } from '../hooks/hooks'
import { setLoggedUser } from '../redux/auth/authSlice'
import { LoginType,UserType } from '../types/types'

import LoginForm from '../features/Login'
import API from '../libs/api'

function LoginPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const toast = useToast();

    async function onLogin(data: LoginType): Promise<void> {
        try {
            const token: string = await API.LOGIN(data)
            if(token){
            const loggedUser: UserType = await API.FIND_LOGGED_USER()

            dispatch(setLoggedUser(loggedUser))
            toast({
                title: "Login success!",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            navigate('/')
            }
        } catch (error) {
            toast({
                title: "Email / password is wrong!",
                status: "error",
                duration: 3000,
                isClosable: true,
              })
        }
    }

    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'15px'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'12px'}>
                    Login to circle
                </Text>
                <LoginForm onLogin={onLogin} />
                <Text>
                    Don't have an account?
                    <Link
                        as={RLink}
                        to={'/register'}
                        color={'circle.green'}
                        ml={'4px'}
                    >
                        Create Account.
                    </Link>
                </Text>
            </Flex>
        </Container>
    )
}

export default LoginPage
