import { Grid, Image } from '@chakra-ui/react'

function SetMedia() {
    const dummies = []
    const dummy = (
        <Image
            src={'https://picsum.photos/500/750?grayscale'}
            height={'100%'}
            width={'100%'}
            objectFit={'cover'}
        />
    )

    for (let i = 0; i < 14; i++) {
        dummies.push(dummy)
    }

    return (
        <Grid
            templateColumns={'repeat(3, 1fr)'}
            templateRows={'repeat(1, 150px)'}
            autoRows={'150px'}
            gap={'8px'}
            padding={'15px'}
        >
            {dummies.map((dummy) => dummy)}
        </Grid>
    )
}

export default SetMedia