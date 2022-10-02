import { InitialStateType, UserActions, Types } from "../models/reducerTypes";

export const reducer = (state: InitialStateType, action: UserActions) => {
  switch (action.type) {
    case Types.Update:
      return {
        ...state,
        user: { ...action.payload },
      };
    default:
      return state;
  }
};
