import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { InitialStateType, LogActions, UserActions } from "../models/reducerTypes";
import { reducer } from "../utils/reducer";

export const initialState: InitialStateType = {
  isLogged: false,
  user: {
    firstname: "John",
    lastname: "Doe",
    email: "john@mail.com",
  },
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UserActions | LogActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const mainReducer = (state: InitialStateType, action: UserActions | LogActions) =>
    reducer(state, action);
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
