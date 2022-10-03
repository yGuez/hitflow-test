import { InitialStateType, UserActions, Types, LogActions } from "../models/reducerTypes";

export const reducer = (state: InitialStateType, action: UserActions | LogActions) => {
  switch (action.type) {
    case Types.Update:
      return {
        ...state,
        user: { ...action.payload },
      };
    case Types.Log:
      return {
        isLogged: true,
        user: { ...state.user },
      };
    default:
      return state;
  }
};
