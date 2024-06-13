import { Card, Box, Flex, Divider } from '@chakra-ui/react'
import ProfileCardHeader from '../cards/ProfileCardHeader'
import BrandHeading from '../utils/tradeHeading'
import SolidButton from '../button/solidButton'
import SolidInput from '../input/SolidInput'

function EditProfile() {
    return (
        <Box py={'2rem'}>
            <Card bg={'circle.backdrop'} px={'15px'} color={'circle.font'} mb={'1.5rem'}>
                <BrandHeading text={'Edit Profile'} />
                <ProfileCardHeader editable />
            </Card>
            <Flex direction={'column'} gap={'8px'} px={'15px'} mb="15px">
                
                <SolidInput type={'text'} placeholder={'Name'} value={'Gianni Infantino'} />
                <SolidInput type={'text'} placeholder={'Username'} value={'@fifapresiden'} />
                <SolidInput
                    type={'text'}
                    placeholder={'Bio'}
                    value={
                        'I go my way. We have embraced reforms. We have embraced transparency. We have embraced good governance. We have turned a page.'
                    }
                />
            </Flex>
            <Divider borderColor={'circle.darker'} />
            <Box width={'25%'} px={'15px'} pt={'15px'} ml={'auto'}>
                <SolidButton text={'Save'} />
            </Box>
        </Box>
    )
}

export default EditProfile
