import { Flex, Box, Image } from '@chakra-ui/react'
import { BiExitFullscreen, BiSolidArrowFromLeft, BiSolidArrowFromRight } from 'react-icons/bi'
import { fontSizing } from '../../styles/style'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import BrandModal from '../assets/BrandModal'
import GhostButton from '../button/ghostButton'
import ThreadDetail from '../threads/ThreadDetail'
import { useReply } from '../../hooks/useReply'

interface ImageModalProps {
    onClose: () => void
    isOpen: boolean
    ThreadPhoto: string | null
}

function ImageModal({ isOpen, onClose, ThreadPhoto }: ImageModalProps) {
    const [hideThread, setHideThread] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const id: string | null = searchParams.get('threadId')
    const threadId: number = id ? +id : NaN

    const [thread, onReply] = useReply(threadId)

    function onCloseModal(): void {
        setSearchParams({})

        onClose()
    }

    function onHideThread(): void {
        setHideThread((oldState) => !oldState)
    }

    if (thread) {
        return (
            <BrandModal isOpen={isOpen} onClose={onClose} size={'full'}>
                <Flex height={'100vh'}>
                    <Flex
                        pos={'relative'}
                        padding={'1rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flex={2}
                    >
                        <Image
                            src={ThreadPhoto ? ThreadPhoto : undefined}
                            width={'auto'}
                            height={'auto'}
                            maxWidth={'100%'}
                            maxHeight={'100%'}
                            objectFit={'cover'}
                        />
                        <Flex
                            pos={'absolute'}
                            left={0}
                            top={0}
                            padding={'1rem'}
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            <GhostButton onClick={onCloseModal}>
                                <Box color={'circle.font'} fontSize={fontSizing.bigger}>
                                    <BiExitFullscreen />
                                </Box>
                            </GhostButton>
                            <GhostButton onClick={onHideThread}>
                                <Box color={'circle.font'} fontSize={fontSizing.bigger}>
                                    {hideThread ? <BiSolidArrowFromLeft /> : <BiSolidArrowFromRight />}
                                </Box>
                            </GhostButton>
                        </Flex>
                    </Flex>
                    {hideThread && (
                        <Box
                            py={'1rem'}
                            border={'1px'}
                            borderColor={'circle.darker'}
                            overflow={'scroll'}
                            flex={1}
                        >
                            <ThreadDetail thread={thread} Reply={onReply} noImage />
                        </Box>
                    )}
                </Flex>
            </BrandModal>
        )
    }
}

export default ImageModal
