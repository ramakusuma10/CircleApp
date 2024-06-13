import { Box, FormControl, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { RegisterType } from '../types/types'
import { RegisterSchema } from '../validator/validator'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '../component/button/solidButton'

interface RegisterInputProps {
    onRegister: (data: RegisterType) => void
}

function RegisterInput(props: RegisterInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterType>({
        resolver: zodResolver(RegisterSchema),
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
                type={'text'}
                placeholder="fullname"
                variant={'hollow'}
                {...register('fullname')}
            />
            <p>{errors.fullname?.message}</p>
            <Input
                type={'email'}
                placeholder="Email"
                variant={'hollow'}
                {...register('email')}
            />
            <p>{errors.email?.message}</p>
            <Input
                type={'password'}
                placeholder="Passoword"
                variant={'hollow'}
                {...register('password')}
            />
            <p>{errors.password?.message}</p>

            <Box mt={'8px'}>
                <SolidButton
                    text={'Create'}
                    onClick={handleSubmit((data) => {
                        props.onRegister(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default RegisterInput
