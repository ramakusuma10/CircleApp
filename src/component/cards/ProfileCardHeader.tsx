import { Image, Flex, CardHeader, Box, useDisclosure, Input } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'
import { BiImages } from 'react-icons/bi'

import HollowButton from '../button/hollowButton'
import BrandModal from '../assets/BrandModal'
import EditProfile from '../assets/EditProfile'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { useState } from 'react'

interface ProfileCardHeaderProps<T extends FieldValues>{
    buttonText?: string
    editable?: boolean
    avatar: string
    fullname?: Path<T>
    register?: UseFormRegister<T>
}


function ProfileCardHeader<T extends FieldValues>(props:ProfileCardHeaderProps<T>){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { buttonText, editable, avatar, register, fullname } = props

    const [avatarPreview, setAvatarPreview] = useState<string>('')

    function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files

        if (files) {
            setAvatarPreview(URL.createObjectURL(files[0]))
        }
    }
    return(
            <CardHeader
                display={'flex'}
                flexDirection={'column'}
                padding={0}
                mt={'15px'}
                gap={'8px'}
                pos={'relative'}
        >
                <Image
                    src={avatar}
                    objectFit={'cover'}
                    height={editable ? '200px' : '150px'}
                    width={'100%'}
                    borderRadius={'xl'}
                    mb={editable ? '45px' : 0}
                />
                 {!editable && (
                <Box ml={'auto'} zIndex={1}>
                    <HollowButton onClick={onOpen} text={buttonText} />
                </Box>
                )}
                <Flex pos={'absolute'} left={'5%'} bottom={'0'}>
                <Image
                    src={avatarPreview ? avatarPreview : avatar}
                    borderRadius={'full'}
                    boxSize={'150px'}
                    border={'4px'}
                    borderColor={'circle.darker'}
                />
                </Flex>
                {editable && fullname && register &&(
                <Flex
                    boxSize={'150px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pos={'absolute'}
                    left={'5%'}
                    bottom={'0'}
                >
                    <Input
                        pos={'absolute'}
                        type={'file'}
                        height={0}
                        width={0}
                        border={0}
                        id="atAvatar"
                        variant={'hollow'}
                        {...register(fullname)}
                        onChange={(e) => onAvatarChange(e)}
                    />
                    <Box
                        bg={'circle.backdrop'}
                        opacity={'.8'}
                        padding={'15px'}
                        borderRadius={'full'}
                    >
                        <label htmlFor="atAvatar">
                            <BiImages fontSize={fontSizing.bigger} />
                        </label>
                    </Box>
                </Flex>
            )}
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <EditProfile avatar={avatar} onClose={onClose} />
            </BrandModal>
        </CardHeader>
    )
}

export default(ProfileCardHeader)