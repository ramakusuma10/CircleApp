import { Avatar, Flex, Spacer, FormControl, Box, Divider, Input } from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ThreadDataType } from '../../types/types'
import { ThreadSchema } from '../../validator/validator'

import SolidButton from '../button/solidButton'
import ImagePreview from '../utils/ImagePreview'
import ThreadInput from '../../features/threads/Thread'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

interface ThreadProps {
    onPost : (data: ThreadDataType) => Promise<void> | void
    placeholder: string
    buttonText?: string
    imagePreviewId: string
}

function NewThread(props: ThreadProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)
    const {placeholder, buttonText, imagePreviewId} = props
    const [imagePreview, setImagePreview] = useState<string>('')
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm<ThreadDataType>({
        resolver: zodResolver(ThreadSchema),
    })

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files

        if (files?.length) {
            setImagePreview(URL.createObjectURL(files[0]))
        }
    }

    return (
        <Box>
            <Flex direction={'column'} justifyContent={'center'} gap={'10px'}>
                <Flex alignItems={'start'} gap={'15px'} ml={'15px'} mt={'15px'}>
                <Avatar src={loggedUser?.avatar} />
                    <ThreadInput
                        placeholder={placeholder}
                        name={'content'}
                        register={register}
                        error={errors.content}
                    />
                </Flex>
                <ImagePreview imagePreview={imagePreview} onClose={() => setImagePreview('')} />
                <Divider borderColor={'circle.darker'} />
                <Flex alignItems={'center'} gap={'10px'} color={'circle.green'} mb={'15px'} mr={'15px'}  >
                    <Spacer />
                    <FormControl display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                        <Input
                            type={'file'}
                            height={0}
                            width={0}
                            border={0}
                            id={imagePreviewId}
                            variant={'hollow'}
                            placeholder={placeholder}
                            {...register('image')}
                            onChange={(e) => onImageChange(e)}
                        />
                        <label htmlFor={imagePreviewId}>
                            <BiImageAdd fontSize={'2rem'} />
                        </label>
                    </FormControl>
                    <Box width={'15%'}>
                        <SolidButton
                            text={buttonText ? buttonText : 'Post'}
                            onClick={handleSubmit(async(data) =>{ await props.onPost(data)
                                resetField('content')
                                resetField('image')
                                setImagePreview('')
                            })}
                        />
                    </Box>
                </Flex>
            </Flex>
            <Divider border={'1px'} borderColor={'circle.darker'} />
        </Box>
    )
}

export default NewThread
