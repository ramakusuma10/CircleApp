import { Image, Flex, CardHeader, Box, useDisclosure } from '@chakra-ui/react'
import { fontSizing } from '../../styles/style'
import { BiImages } from 'react-icons/bi'

import HollowButton from '../button/hollowButton'
import GhostButton from '../button/ghostButton'
import BrandModal from '../assets/BrandModal'
import EditProfile from '../assets/EditProfile'

interface ProfileCardHeaderProps {
    buttonText?: string
    editable?: boolean
}

function ProfileCardHeader({buttonText, editable}:ProfileCardHeaderProps){
    const { isOpen, onOpen, onClose } = useDisclosure()
return(
            <CardHeader
                display={'flex'}
                flexDirection={'column'}
                padding={0}
                gap={'8px'}
                pos={'relative'}
        >
                <Image
                    src="https://api.dicebear.com/8.x/adventurer/svg?seed=Coco&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf"
                    objectFit={'cover'}
                    height={'150px'}
                    width={'100%'}
                    borderRadius={'xl'}
                />
                 {!editable && (
                <Box ml={'auto'} zIndex={1}>
                    <HollowButton onClick={onOpen} text={buttonText} />
                </Box>
                )}
                <Flex pos={'absolute'} left={'5%'} bottom={'0'}>
                <Image
                    src={'https://api.dicebear.com/8.x/adventurer/svg?seed=Coco&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'}
                    borderRadius={'full'}
                    boxSize={'100px'}
                    border={'4px'}
                    borderColor={'circle.darker'}
                />
                </Flex>
                {editable && (
                <Flex
                    boxSize={'150px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pos={'absolute'}
                    left={'5%'}
                    bottom={'0'}
                >
                    <Box
                        bg={'circle.backdrop'}
                        opacity={'.8'}
                        padding={'1rem'}
                        borderRadius={'full'}
                    >
                        <GhostButton color={'circle.font'} fontSize={fontSizing.biggest}>
                            <BiImages />
                        </GhostButton>
                    </Box>
                </Flex>
            )}
            <BrandModal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <EditProfile />
            </BrandModal>
                </CardHeader>
    )
}

export default(ProfileCardHeader)