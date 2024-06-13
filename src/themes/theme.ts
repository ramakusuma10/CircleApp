import { extendTheme } from '@chakra-ui/react'

const circleTheme = extendTheme({
    colors: {
        circle: {
            backdrop: '#171717',
            backdropGreen: '#1c1c1c',
            font: '#dedede',
            dark: '#757575',
            darker: '#1f1f1f',
            red: '#D71913',
            green: '#0be94ede',
            darkgreen: '#339438',
        },
    },
    styles: {
        global: {
            body: {
                fontFamily: 'Arial',
                color: '#dedede',
                bg: '#171717',
                fontSize: '14.5px',
            },
        },
    },
})

export default circleTheme
