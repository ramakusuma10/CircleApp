import { useNavigate, useLocation} from 'react-router-dom'
import { Container, Flex, Text, Image} from '@chakra-ui/react'
import { fontSizing } from '../styles/style'
import { ResetType } from '../types/types'
import { useEffect } from 'react'
import ResetForm from '../features/auth/ResetPassword'
import api from '../libs/api'

function ResetPassword() {
    const navigate = useNavigate()
    const { state: token } = useLocation()
    
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [navigate, token])

        async function onReset(data: ResetType): Promise<void> {
            try {
                await api.ResetPassword(data, token)
                navigate('/resetpasssword')
            } catch (error) {
                alert(error)
            }
        }
    return (
        <Container height={'100vh'} width={'400px'}>
            <Flex direction={'column'} gap={'15px'} justifyContent={'center'} height={'50%'}>
                <Image src={'/circle.png'} width={'35%'} />
                <Text fontSize={fontSizing.bigger} fontWeight={'600'} mt={'-12px'}>
                    Reset Password
                </Text>
                <ResetForm onReset={onReset} />
            </Flex>
        </Container>
    )
}

export default ResetPassword
