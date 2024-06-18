import { Grid, Image } from '@chakra-ui/react'

function SetMedia() {
    const dummies = []
    const dummy = (
        <Image
            src={'https://cdn.idntimes.com/content-images/community/2020/06/tanjiro1-ed6519a91156c68fcf14ac252e4bba71_600x400.jpg'}
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