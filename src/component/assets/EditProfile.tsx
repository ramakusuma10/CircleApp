import { Card, Box, Flex, Divider } from '@chakra-ui/react'
import SolidButton from '../button/solidButton'
import SolidInput from '../input/SolidInput'
import ProfileCardHeader from '../cards/ProfileCardHeader'
import BrandHeading from '../utils/tradeHeading'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditUserDataType } from '../../types/types'
import { UserSchema } from '../../validator/validator'
import { RootState } from '../../redux/store'
import { useForm } from 'react-hook-form'
import { useEditUser } from '../../hooks/useEditProfile'

interface EditProfileProps {
    avatar: string
    onClose: () => void
}

function EditProfile({avatar, onClose}: EditProfileProps) {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditUserDataType>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            fullname: loggedUser?.fullname,
            username: loggedUser?.username,
            bio: loggedUser?.bio || '',
            avatar: null,
        },
    })
    const [onEdit] = useEditUser({ onClose })

            return (
        <Box py={'30px'}>
            <Card bg={'circle.backdrop'} px={'15px'} color={'circle.font'} mb={'1.5rem'}>
                <BrandHeading text={'Edit Profile'} />
                <ProfileCardHeader avatar={avatar} fullname={'avatar'} register={register} editable />
            </Card>
            <Flex direction={'column'} gap={'8px'} px={'15px'} mb="15px">
                
                <SolidInput type={'text'} placeholder={'Fullname'} name={'fullname'} register={register} error={errors.fullname}/>
                <SolidInput type={'text'} placeholder={'Username'} name={'username'} register={register} error={errors.username}/>
                <SolidInput
                    type={'text'}
                    placeholder={'Bio'}
                    name={'bio'}
                    register={register}
                    error={errors.bio}
                />
            </Flex>
            <Divider borderColor={'circle.darker'} />
            <Box width={'25%'} px={'15px'} pt={'15px'} ml={'auto'}>
                <SolidButton text={'Save'} onClick={handleSubmit((data) => onEdit(data))}/>
            </Box>
        </Box>
    )
}

export default EditProfile
