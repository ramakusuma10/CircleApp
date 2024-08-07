import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from '../src/redux/store.ts'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import circleTheme from './themes/theme.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const qClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={qClient}>
            <Provider store={store}>
                <ChakraProvider theme={circleTheme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ChakraProvider>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
)
