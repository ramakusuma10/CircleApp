import { Link as ReactLink , useNavigate} from 'react-router-dom'
import {
    Container,
    Flex,
    Text,
    Image,
    Link,
} from '@chakra-ui/react'
import { fontSizing } from '../styles/style'
import { ForgotType } from '../types/types'
import ForgotForm from '../features/ForgotPassword'
import API from '../libs/api'


function ForgotPasswordPage() {
    const navigate = useNavigate()
        async function onForgot(data: ForgotType): Promise<void> {
            try {
                const token = await API.FORGOT_PASSWORD(data)
                navigate('/resetpasssword',{
                    state: token,
                })
            } catch (error) {
                alert(error)
            }
        }
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'15px'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-10px'}>
                    Forgot Password
                </Text>
                <ForgotForm onForgot={onForgot} />
                <Text>
                    Already have an account?
                    <Link as={ReactLink} to={'/login'} color={'circle.green'} ml={'4px'}>
                        Login.
                    </Link>
                </Text>
            </Flex>
        </Container>
    )
}

export default ForgotPasswordPage
