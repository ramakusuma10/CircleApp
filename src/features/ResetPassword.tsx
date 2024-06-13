import { Box, FormControl, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { ResetType } from '../types/types'
import { ResetSchema } from '../validator/validator'
import { zodResolver } from '@hookform/resolvers/zod'

import SolidButton from '../component/button/solidButton'

interface ResetInputProps {
    onReset: (data: ResetType) => void
}

function ResetInput(props: ResetInputProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetType>({
        resolver: zodResolver(ResetSchema),
    })


    return (
        <FormControl display={'flex'} flexDirection={'column'} gap={'8px'}>
            <Input
                type={'text'}
                placeholder={'New Password'}
                variant={'hollow'}
                {...register('newPassword')}
            />
            <p>{errors.newPassword?.message}</p>
            <Input
                type={'text'}
                placeholder={'Confirm Password'}
                variant={'hollow'}
                {...register('confirmedPassword')}
            /> 
            <p>{errors.confirmedPassword?.message}</p>
    
             <Text mt={'8px'} color={'circle.error'}>
                {errors.general?.message}
            </Text>

            <Box mt={'8px'}>
                <SolidButton
                    text={'Create'}
                    onClick={handleSubmit((data) => {
                        props.onReset(data)
                    })}
                />
            </Box>
        </FormControl>
    )
}

export default ResetInput
