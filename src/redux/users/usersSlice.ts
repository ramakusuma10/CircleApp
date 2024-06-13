import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types/types'

interface UserStates {
    allUsers: UserType[]
    user: UserType | null
}

const initialState: UserStates = {
    allUsers: [],
    user: null,
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setAllUsers: (state, action: PayloadAction<UserType[]>) => {
            state.allUsers = action.payload
        },
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
        },
    },
})

export const { setAllUsers, setUser } = usersSlice.actions

export default usersSlice.reducer
