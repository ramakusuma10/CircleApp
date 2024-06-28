import { Grid, Image, useDisclosure } from '@chakra-ui/react'
import { ThreadType } from '../../types/types'
import { useSearchParams } from 'react-router-dom'
import ImageModal from '../assets/ImageModal'
import GhostButton from '../button/ghostButton'

interface SetMediaProps {
    threads: ThreadType[]
}

function SetMedia({ threads }: SetMediaProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [, setSearchParams] = useSearchParams()

    function onImageClick(id: number): void {
        setSearchParams({ threadId: String(id) })

        onOpen()
    }

    if (threads.length) {
        return (
            <Grid
                templateColumns={'repeat(3, 1fr)'}
                templateRows={'repeat(1, 150px)'}
                autoRows={'150px'}
                gap={'8px'}
                padding={'15px'}
            >
                {threads.map((thread) => {
                    if (thread.image) {
                        return (
                            <GhostButton onClick={() => onImageClick(thread.id)} key={thread.id}>
                                <Image
                                    src={thread.image}
                                    height={'100%'}
                                    width={'100%'}
                                    objectFit={'cover'}
                                />
                                {isOpen && (
                                    <ImageModal
                                        isOpen={isOpen}
                                        onClose={onClose}
                                        ThreadPhoto={thread.image}
                                    />
                                )}
                            </GhostButton>
                        )
                    }
                })}
            </Grid>
        )
    }
}
export default SetMedia