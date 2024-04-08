import {
    InitialStateType,
    UserActions,
    Types,
    LogActions,
    LogActionsSuccess,
    LogActionsFail,
} from '../models/reducerTypes'

export const reducer = (
    state: InitialStateType,
    action: UserActions | LogActions | LogActionsSuccess | LogActionsFail
) => {
    switch (action.type) {
        case Types.Update:
            return {
                ...state,
                user: { ...action.payload },
            }
        case Types.Login:
            return {
                ...state,
                isLoading: action.payload,
                user: { ...state.user },
            }
        case Types.LoginSuccess:
            return {
                isLogged: true,
                isLoading: false,
                user: { ...state.user },
            }
        case Types.LoginFail:
            return {
                isLogged: false,
                isLoading: false,
                user: { ...state.user },
            }
        default:
            return state
    }
}
