import React, { createContext, Dispatch, ReactNode, useReducer } from 'react'
import {
    InitialStateType,
    LogActions,
    LogActionsFail,
    LogActionsSuccess,
    UserActions,
} from '../models/reducerTypes'
import { reducer } from '../utils/reducer'

export const initialState: InitialStateType = {
    isLogged: false,
    isLoading: false,
    user: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@mail.com',
    },
}

export const AppContext = createContext<{
    state: InitialStateType
    dispatch: Dispatch<
        UserActions | LogActions | LogActionsSuccess | LogActionsFail
    >
}>({
    state: initialState,
    dispatch: () => null,
})

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const mainReducer = (
        state: InitialStateType,
        action: UserActions | LogActions | LogActionsSuccess | LogActionsFail
    ) => reducer(state, action)
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}
