import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DetailThreadType, ThreadType } from '../../types/types'

interface ThreadsState {
    threads: ThreadType[]
    detailThread: DetailThreadType | null
}

const initialState: ThreadsState = {
    threads: [],
    detailThread: null,
}

const threadsSlice = createSlice({
    name: 'threadsSlice',
    initialState,
    reducers: {
        postThreads: (state, action: PayloadAction<ThreadType[]>) => {
            state.threads = action.payload
        },
        setDetailThread: (state, action: PayloadAction<DetailThreadType>) => {
            state.detailThread = action.payload
        },
    },
})

export const { postThreads, setDetailThread } = threadsSlice.actions

export default threadsSlice.reducer
