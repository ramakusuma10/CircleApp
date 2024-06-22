import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LoginType } from '../../types/types'
import { LoginSchema } from '../../validator/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import SolidButton from '../../component/button/solidButton'

interface LoginInputProps {
    onLogin: (data: LoginType) => void
}

function LoginInput(props: LoginInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
    })


    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'8px'}>
            <Input
                type={'text'}
                placeholder="Username"
                variant={'hollow'}
                {...register('username')}
            />
            <p>{errors.username?.message}</p>
            <Input
                type={'password'}
                placeholder="Password"
                variant={'hollow'}
                {...register('password')}
            />
            <p>{errors.password?.message}</p>

            <Box mt={'8px'}>
                <SolidButton
                    text={'Login'}
                    onClick={handleSubmit((data) => {
                        props.onLogin(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default LoginInput
