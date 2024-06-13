import { Box, FormControl, Input} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { ForgotType } from '../types/types'
import { ForgotSchema } from '../validator/validator'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '../component/button/solidButton'

interface ForgotInputProps {
    onForgot: (data: ForgotType) => void
}

function ForgotInput(props: ForgotInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotType>({
        resolver: zodResolver(ForgotSchema),
    })
    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'.5rem'}>
            <Input
                type={'email'}
                placeholder="Email"
                variant={'hollow'}
                {...register('email')}
            />
            <p>{errors.email?.message}</p>

            <Box mt={'.5rem'}>
                <SolidButton
                    text={'Send Instruction'}
                    onClick={handleSubmit((data) => {
                        props.onForgot(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default ForgotInput