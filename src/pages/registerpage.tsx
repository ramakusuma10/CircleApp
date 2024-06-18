import { useNavigate,Link as ReactLink } from 'react-router-dom'
import {
    Container,
    Flex,
    Image,
    Text,
    Link,
    useToast,
} from '@chakra-ui/react'
import { fontSizing } from '../styles/style'
import { RegisterType } from '../types/types'

import RegisterForm from '../features/auth/Register'
import api from '../libs/api'

function RegisterPage() {
        const navigate = useNavigate()
        const toast = useToast()

        async function onRegister(data: RegisterType): Promise<void> {
            try {

                await api.Register(data)
                navigate('/login')
                toast({
                    title: "Register success!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } catch (error) {
                toast({
                    title: "Register failed!",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
            }
        }
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'15px'} justifyContent={'center'} height={'100%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-12px'}>
                    Create new account
                </Text>
                <RegisterForm onRegister={onRegister} />
                <Text>
                    Already have account?
                    <Link as={ReactLink} to={'/login'} color={'circle.green'} ml={'4px'}>
                        Login.
                    </Link>
                </Text>
            </Flex>
        </Container>
    )
}

export default RegisterPage
